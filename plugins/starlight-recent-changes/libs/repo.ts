import { execSync } from 'node:child_process';

export function getRepoRoot() {
	return process.cwd();
}

export function getRepoBaseUrl(root?: string) {
	if (!root) root = getRepoRoot();

	try {
		const raw = execSync('git remote get-url origin', { cwd: root, encoding: 'utf8' }).trim();
		if (!raw) return '';
		if (raw.startsWith('git@github.com:')) {
			return raw.replace('git@github.com:', 'https://github.com/').replace(/\.git$/, '');
		}
		if (raw.startsWith('https://github.com/') || raw.startsWith('http://github.com/')) {
			return raw.replace(/\.git$/, '');
		}
		if (raw.startsWith('ssh://git@github.com/')) {
			return raw.replace('ssh://git@github.com/', 'https://github.com/').replace(/\.git$/, '');
		}
	} catch {
		// ignore
	}
	return '';
}