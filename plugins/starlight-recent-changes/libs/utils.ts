import path from 'node:path';

export function normalizeSlug(filePath: string, docsRoot: string) {
	const relativePath = path.relative(docsRoot, filePath).replace(/\\/g, '/');
	return relativePath.replace(/\.(md|mdx)$/, '');
}
