export function matchesPage(slug: string, pages: boolean | string[]): boolean {
	if (pages === true) return true;
	return pages.some((pattern) => globToRegExp(pattern).test(slug));
}

function globToRegExp(glob: string): RegExp {
	const escaped = glob.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	return new RegExp(
		`^${escaped.replace(/\\\*\\\*/g, '.*').replace(/\\\*/g, '[^/]*').replace(/\\\?/g, '[^/]')}$`,
	);
}
