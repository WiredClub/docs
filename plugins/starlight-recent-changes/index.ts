import type { StarlightPlugin } from '@astrojs/starlight/types'
import type RecentChangesOptions from "./common/types.ts";
import { translations } from './i18n';
import starlightRecentChangesIntegration from './libs/integration.ts';

export default function starlightRecentChanges(userConfig: RecentChangesOptions = {}): StarlightPlugin {
	return {
		name: 'starlight-recent-changes-plugin',
		hooks: {
			'i18n:setup'({ injectTranslations }) {
				injectTranslations(translations);
			},
			'config:setup': async ({ config, updateConfig, addIntegration }) => {
				// if (command === 'preview') return; // Avoid adding routes during dev server startup, which can cause issues with HMR

				addIntegration(starlightRecentChangesIntegration(userConfig));
				const componentOverrides: typeof config.components = {};

				if (config.components?.LastUpdated) {
					console.warn(
						'It looks like you already have a `LastUpdated` component override in your Starlight configuration.',
					);
					console.warn(
						'To use `starlight-recent-changes`, either remove the override or manually render `starlight-recent-changes/components/ViewHistory.astro`.',
					);
				} else if (userConfig.viewHistory !== false) {
					componentOverrides.LastUpdated = 'starlight-recent-changes/overrides/LastUpdated.astro';
				}

				updateConfig({
					components: {
						...componentOverrides,
						...config.components,
					},
				});
			}
		},
	}
}