// Fração da largura do vídeo ocupada pela marca. Ajuste aqui o tamanho.
export const WATERMARK_WIDTH = 0.2;
export const WATERMARK_WIDTH_MIN = 0.1;
export const WATERMARK_WIDTH_MAX = 1.5;
// 10% de transparência corresponde a 90% de opacidade.
export const WATERMARK_TRANSPARENCY = 0.9;
export const WATERMARK_OPACITY = 1 - WATERMARK_TRANSPARENCY;

export const DEFAULT_CRF = 28;
export const DEFAULT_PRESET = 'veryfast';
export const DEFAULT_AUDIO_BITRATE = '96k';

export interface WatermarkOptions {
  size?: number;
  crf?: number;
  preset?: string;
  audioBitrate?: string;
}

/** Shared by the browser processor and the export integration test. */
export function getVideoDisplayWidth(metadata: {
  streams?: { width?: number; height?: number; side_data_list?: { rotation?: number }[] }[];
}): number {
  const stream = metadata.streams?.[0];
  const rotation = Math.abs(stream?.side_data_list?.find(data => data.rotation !== undefined)?.rotation ?? 0) % 180;
  const width = rotation === 90 ? stream?.height : stream?.width;
  if (!width || !Number.isFinite(width) || width < 2) throw new Error('O arquivo não contém uma faixa de vídeo válida.');
  return width;
}

export function buildWatermarkArgs(
  input: string,
  logo: string,
  output: string,
  width: number,
  optionsOrSize: number | WatermarkOptions = WATERMARK_WIDTH,
): string[] {
  const options: WatermarkOptions = typeof optionsOrSize === 'number'
    ? { size: optionsOrSize }
    : (optionsOrSize ?? {});

  const size = options.size ?? WATERMARK_WIDTH;
  const crf = String(options.crf ?? DEFAULT_CRF);
  const preset = options.preset ?? DEFAULT_PRESET;
  const audioBitrate = options.audioBitrate ?? DEFAULT_AUDIO_BITRATE;

  const fraction = Number.isFinite(size) ? Math.max(WATERMARK_WIDTH_MIN, Math.min(WATERMARK_WIDTH_MAX, size)) : WATERMARK_WIDTH;
  const logoWidth = Math.max(2, Math.floor(width * fraction / 2) * 2);
  const filter = `[1:v]scale=${logoWidth}:-2,format=rgba,colorchannelmixer=aa=${WATERMARK_OPACITY}[logo];` +
    '[0:v][logo]overlay=(W-w)/2:(H-h)/2:format=auto,scale=trunc(iw/2)*2:trunc(ih/2)*2[outv]';
  return [
    '-i', input, '-i', logo,
    '-filter_complex', filter,
    '-map', '[outv]', '-map', '0:a?',
    '-c:v', 'libx264', '-preset', preset, '-crf', crf,
    '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', audioBitrate,
    '-movflags', '+faststart', output,
  ];
}
