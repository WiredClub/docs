import type { AstroIntegration } from 'astro';
import type RecentChangesOptions from '../common/types.js';


export default function starlightRecentChangesIntegration(options: RecentChangesOptions = {}): AstroIntegration {
	const pluginConfig = {
		routeSlug: 'recent-changes',
		...options
	};

	return {
		name: 'starlight-recent-changes-plugin',
		hooks: {
			'astro:config:setup': async ({ config, updateConfig, injectRoute }) => {
				injectRoute({
					pattern: `/${pluginConfig.routeSlug}`,
					entrypoint: 'starlight-recent-changes/pages/RecentChanges.astro',
				})

				injectRoute({
					pattern: `/${pluginConfig.routeSlug}/[...page]`,
					entrypoint: 'starlight-recent-changes/pages/PageHistory.astro',
				})
			}
		}
	};
}
