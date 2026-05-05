import path from 'node:path';

export function normalizeSlug(filePath: string, docsRoot: string) {
	const relativePath = path.relative(docsRoot, filePath).replace(/\\/g, '/');
	return relativePath.replace(/\.(md|mdx)$/, '');
}

export function removeAcento(text: string) {
	text = text.toLowerCase();
	text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
	text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
	text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
	text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
	text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
	text = text.replace(new RegExp('[Ç]','gi'), 'c');
	return text;
}
