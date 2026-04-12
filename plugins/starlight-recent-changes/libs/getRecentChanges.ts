import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { getEntries } from 'astro:content';
import { getRepoBaseUrl, getRepoRoot } from './repo';
import { normalizeSlug } from './utils';

const GIT_COMMIT_SPLIT = '==RECENT_CHANGES_COMMIT==';
const CONTENT_DIR = 'src/content/docs';

function commitKindFromMessage(message: string) {
	if (/\b(add|create|new|init)\b/i.test(message)) return 'add';
	if (/\b(remove|delete|rm|drop)\b/i.test(message)) return 'delete';
	return 'edit';
}

export async function getRecentChanges(filePath?: string) {
	const limit = 1000;
	const root = getRepoRoot();
	const docsRoot = path.resolve(root, CONTENT_DIR);
	const repoBaseUrl = getRepoBaseUrl(root);

	let filterSlug: string | null = null;
	if (filePath) {
		filterSlug = normalizeSlug(filePath, docsRoot);
	}

	let rawLog = '';
	try {
		const result = spawnSync(
			'git',
			[
				'log',
				'--no-merges',
				'--date=iso-strict',
				`--pretty=format:${GIT_COMMIT_SPLIT}%H|%an|%ad|%s`,
				'--name-only',
				'--',
				CONTENT_DIR
			],
			{ cwd: root, encoding: 'utf8' }
		);

		rawLog = result.stdout;
	} catch {
		return [];
	}

	const entries = await Promise.all(rawLog
		.split(GIT_COMMIT_SPLIT)
		.filter(Boolean)
		.map(async (chunk) => {
			const lines = chunk.split(/\r?\n/).filter(Boolean);
			const [meta, ...files] = lines;
			if (!meta) return null;

			const [hash, author, date, ...messageParts] = meta.split('|');
			const message = messageParts.join('|').trim();
			let touchedFiles = Array.from(
				new Set(
					files
						.map((file) => file.trim())
						.filter((file) => file && file.startsWith(CONTENT_DIR) && /\.(md|mdx)$/.test(file))
				)
			);

			if (filterSlug && !touchedFiles.some(file => normalizeSlug(path.resolve(root, file), docsRoot) === filterSlug)) {
				return null;
			}

			// Load titles in batch using getEntries
			const slugs = Array.from(new Set(touchedFiles.map(file => normalizeSlug(path.resolve(root, file), docsRoot))));
			const contentEntries = await getEntries(slugs.map(id => ({ collection: 'docs' as const, id })))
				;

			const titleMap = new Map(contentEntries.filter(x => !!x).map(entry => [entry.id, entry.data.title as string || '']));

			const pages = touchedFiles.map((file) => {
				const slug = normalizeSlug(path.resolve(root, file), docsRoot);
				const title = titleMap.get(slug) || "Unknown title";
				return {
					title,
					slug,
				};
			});

			return {
				date,
				kind: commitKindFromMessage(message),
				author: author.trim(),
				message,
				pages,
				commitUrl: repoBaseUrl ? `${repoBaseUrl}/commit/${hash}` : hash,
			};
		})).then(r => r
			.filter(x => !!x));

	return entries;
}
