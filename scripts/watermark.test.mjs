import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { buildWatermarkArgs, getVideoDisplayWidth, WATERMARK_OPACITY, DEFAULT_CRF, DEFAULT_PRESET, DEFAULT_AUDIO_BITRATE } from '../src/utils/watermark.ts';

function run(command, args) {
  const result = spawnSync(command, args, { encoding: 'utf8', timeout: 20000, maxBuffer: 8 * 1024 * 1024 });
  assert.equal(result.status, 0, result.error?.message || result.stderr);
  return result.stdout;
}

test('exports exactly one watermarked video stream and keeps optional audio', () => {
  const directory = mkdtempSync(join(tmpdir(), 'wiredclub-watermark-'));
  try {
    const logo = join(directory, 'logo.ppm');
    writeFileSync(logo, Buffer.concat([Buffer.from('P6\n8 8\n255\n'), Buffer.alloc(8 * 8 * 3, 255)]));
    for (const audio of [true, false]) {
      const input = join(directory, `input-${audio}.mp4`);
      const output = join(directory, `output-${audio}.mp4`);
      run('ffmpeg', ['-y', '-f', 'lavfi', '-i', 'color=c=black:s=160x120:r=10:d=1',
        ...(audio ? ['-f', 'lavfi', '-i', 'sine=frequency=440:duration=1'] : []),
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', ...(audio ? ['-c:a', 'aac'] : []), input]);
      run('ffmpeg', buildWatermarkArgs(input, logo, output, 160));
      const metadata = JSON.parse(run('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', output]));
      assert.equal(metadata.streams.filter((stream) => stream.codec_type === 'video').length, 1);
      assert.equal(metadata.streams.filter((stream) => stream.codec_type === 'audio').length, Number(audio));
      assert.ok(Math.abs(Number(metadata.format.duration) - 1) < 0.25);
      const frame = join(directory, 'frame.rgb');
      run('ffmpeg', ['-y', '-i', output, '-frames:v', '1', '-f', 'rawvideo', '-pix_fmt', 'rgb24', frame]);
      const pixels = readFileSync(frame);
      const centerRed = pixels[(60 * 160 + 80) * 3];
      assert.ok(Math.abs(centerRed - 255 * WATERMARK_OPACITY) < 15, 'white watermark over black should match the configured opacity');
      assert.ok(pixels[(5 * 160 + 5) * 3] < 15, 'corner should retain the original black video');
    }
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('exports the logo at the selected minimum, default, and maximum sizes', () => {
  const directory = mkdtempSync(join(tmpdir(), 'wiredclub-watermark-size-'));
  try {
    const logo = join(directory, 'logo.ppm');
    const input = join(directory, 'input.mp4');
    writeFileSync(logo, Buffer.concat([Buffer.from('P6\n8 8\n255\n'), Buffer.alloc(8 * 8 * 3, 255)]));
    run('ffmpeg', ['-y', '-f', 'lavfi', '-i', 'color=c=black:s=160x120:r=10:d=1', '-c:v', 'libx264', input]);
    for (const size of [0.1, 0.2, 1.5]) {
      const output = join(directory, `output-${size}.mp4`);
      const frame = join(directory, `frame-${size}.rgb`);
      run('ffmpeg', buildWatermarkArgs(input, logo, output, 160, size));
      run('ffmpeg', ['-y', '-i', output, '-frames:v', '1', '-f', 'rawvideo', '-pix_fmt', 'rgb24', frame]);
      const pixels = readFileSync(frame);
      const expected = 255 * WATERMARK_OPACITY;
      const centerRow = Array.from({ length: 160 }, (_, x) => pixels[(60 * 160 + x) * 3]);
      const visibleWidth = centerRow.filter(value => value > expected / 2).length;
      assert.ok(Math.abs(visibleWidth - Math.min(160, 160 * size)) <= 4, `selected size ${size}: actual width ${visibleWidth}`);
    }
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('buildWatermarkArgs configures compression parameters with defaults and overrides', () => {
  const defaultArgs = buildWatermarkArgs('in.mp4', 'logo.png', 'out.mp4', 1920);
  assert.ok(defaultArgs.includes('-preset'));
  assert.equal(defaultArgs[defaultArgs.indexOf('-preset') + 1], DEFAULT_PRESET);
  assert.ok(defaultArgs.includes('-crf'));
  assert.equal(defaultArgs[defaultArgs.indexOf('-crf') + 1], String(DEFAULT_CRF));
  assert.ok(defaultArgs.includes('-b:a'));
  assert.equal(defaultArgs[defaultArgs.indexOf('-b:a') + 1], DEFAULT_AUDIO_BITRATE);

  const customArgs = buildWatermarkArgs('in.mp4', 'logo.png', 'out.mp4', 1920, {
    size: 0.3,
    crf: 26,
    preset: 'superfast',
    audioBitrate: '64k',
  });
  assert.equal(customArgs[customArgs.indexOf('-preset') + 1], 'superfast');
  assert.equal(customArgs[customArgs.indexOf('-crf') + 1], '26');
  assert.equal(customArgs[customArgs.indexOf('-b:a') + 1], '64k');
});

test('the bundled WebAssembly core probes and exports MP4 and MKV files', async () => {
  const require = createRequire(import.meta.url);
  // Emscripten expects the location provided by its browser worker.
  const previousSelf = globalThis.self;
  globalThis.self = { location: { href: 'file:///ffmpeg-core.js' } };
  const directory = mkdtempSync(join(tmpdir(), 'wiredclub-watermark-wasm-'));
  try {
    const core = await require('@ffmpeg/core')({
      wasmBinary: readFileSync(require.resolve('@ffmpeg/core/wasm')),
    });
    const logs = [];
    core.setLogger(({ message }) => logs.push(message));
    core.FS.writeFile('logo.png', readFileSync(new URL('../src/assets/new_logo.png', import.meta.url)));
    for (const format of ['mp4', 'mkv', 'rotated.mp4']) {
      const input = join(directory, `input.${format}`);
      run('ffmpeg', ['-y', '-f', 'lavfi', '-i', 'color=c=black:s=160x120:r=10:d=1',
        ...(format === 'mp4' ? ['-f', 'lavfi', '-i', 'sine=frequency=440:duration=1'] : []),
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', ...(format === 'mp4' ? ['-c:a', 'aac'] : []), input]);
      if (format === 'rotated.mp4') {
        const rotated = join(directory, 'rotated.mp4');
        const rotationArgs = run('ffmpeg', ['-h', 'full']).includes('-display_rotation')
          ? ['-display_rotation:v:0', '90', '-i', input, '-c', 'copy']
          : ['-i', input, '-c', 'copy', '-metadata:s:v:0', 'rotate=90'];
        run('ffmpeg', ['-y', ...rotationArgs, rotated]);
        writeFileSync(input, readFileSync(rotated));
      }
      core.FS.writeFile(`input.${format}`, readFileSync(input));
      core.ffprobe('-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height:stream_side_data=rotation',
        '-of', 'json', `input.${format}`, '-o', 'metadata.json');
      core.reset();
      const displayWidth = getVideoDisplayWidth(JSON.parse(core.FS.readFile('metadata.json', { encoding: 'utf8' })));
      assert.equal(displayWidth, format === 'rotated.mp4' ? 120 : 160);
      const selectedSize = format === 'mp4' ? 0.1 : format === 'mkv' ? 0.2 : 1.5;
      assert.equal(core.exec(...buildWatermarkArgs(`input.${format}`, 'logo.png', 'output.mp4', displayWidth, selectedSize)), 0, logs.join('\n'));
      core.reset();
      const output = join(directory, `result-${format}.mp4`);
      writeFileSync(output, core.FS.readFile('output.mp4'));
      const metadata = JSON.parse(run('ffprobe', ['-v', 'error', '-show_streams', '-show_format', '-of', 'json', output]));
      assert.equal(metadata.streams.filter(s => s.codec_type === 'video').length, 1);
      assert.equal(metadata.streams.filter(s => s.codec_type === 'audio').length, Number(format === 'mp4'));
      assert.equal(metadata.streams.find(s => s.codec_type === 'video').width, displayWidth);
      assert.ok(Math.abs(Number(metadata.format.duration) - 1) < .25);
      for (const name of [`input.${format}`, 'metadata.json', 'output.mp4']) core.FS.unlink(name);
    }
  } finally {
    if (previousSelf === undefined) delete globalThis.self;
    else globalThis.self = previousSelf;
    rmSync(directory, { recursive: true, force: true });
  }
});
