import type { StarlightPlugin } from '@astrojs/starlight/types';
import type { PageReaderOptions } from './common/types.ts';

export type { PageReaderOptions } from './common/types.ts';

export default function starlightPageReader(options: PageReaderOptions = {}): StarlightPlugin {
	const pages = options.pages ?? true;
	return {
		name: 'starlight-page-reader',
			hooks: {
			'config:setup': ({ config, updateConfig, addIntegration }) => {
				if (config.components?.PageSidebar && config.components.PageSidebar !== '@astrojs/starlight/components/PageSidebar.astro') {
					console.warn('[starlight-page-reader] PageSidebar já possui um override. Configure esse override manualmente e importe PageReader nele.');
					return;
				}
				addIntegration({
					name: 'starlight-page-reader-config',
					hooks: {
						'astro:config:setup': ({ updateConfig: updateAstroConfig }) => {
							updateAstroConfig({ vite: { define: { __STARLIGHT_PAGE_READER_PAGES__: JSON.stringify(pages) } } });
						},
					},
				});
				updateConfig({ components: { PageSidebar: 'starlight-page-reader/overrides/PageSidebar.astro' } });
			},
		},
	};
}
