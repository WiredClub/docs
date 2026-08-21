// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightRecentChanges from 'starlight-recent-changes';
import starlightPageReader from 'starlight-page-reader';
import starlightSeo from 'starlight-seo';
import starlightThemeWiredClub from 'starlight-theme-wiredclub';
import { viewTransitions, hastMarkEndOfMarkdown } from "astro-vtbot/starlight-view-transitions";
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.wiredclub.com.br',
	base: '/',
	integrations: [
		starlight({
			title: 'Wired Club Docs',
			logo: {
				src: './src/assets/new_logo.png',
				replacesTitle: true,
			},
			description: 'Documentação oficial da comunidade Wired Club, o maior portal Wired!',
			head: [
				{ tag: 'link', attrs: { rel: 'manifest', href: '/manifest.webmanifest' } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#0b1530' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png' } },
			],
			components: {
				Head: './src/components/Head.astro',
			},

			locales: {
				root: {
					label: 'Português (Brasil)',
					lang: 'pt-BR',
				},
			},
			social: [
				{ icon: 'external', label: 'Website', href: 'https://wiredclub.com.br/' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.wiredclub.com.br' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/wiredclub/docs' },
			],
			sidebar: [
				{
					label: 'Vamos Começar',
					items: [{ autogenerate: { directory: 'vamos-comecar' } },],
				}, {
					label: 'Guias práticos',
					items: [
						{ autogenerate: { directory: 'guias-praticos' } },
						{
							label: 'Mais tutoriais',
							link: 'https://www.wiredclub.com.br/tutoriais',
						},
					],
				}, {
					label: 'Referência',
					items: [
						{
							label: 'Glossário de Termos',
							slug: 'referencia/glossario',
							badge: {
								text: "Novo",
								variant: "tip"
							},
						},
						{
							label: 'Tipos de Wired',
							slug: 'referencia/tipos-de-wireds',
							badge: {
								text: "Novo",
								variant: "tip"
							},
						},
						{
							label: 'Configurando Wireds',
							slug: 'referencia/configurando-wireds',
							badge: {
								text: "Novo",
								variant: "tip"
							},
						},
						{
							label: 'Ativadores',
							items: [{ autogenerate: { directory: 'referencia/ativadores' } }],
							collapsed: true,
						},
						{
							label: 'Efeitos',
							items: [{ autogenerate: { directory: 'referencia/efeitos' } }],
							collapsed: true,
						},
						{
							label: 'Condições',
							items: [{ autogenerate: { directory: 'referencia/condicoes' } }],
							collapsed: true,
						},
						{
							label: 'Seletores',
							items: [{ autogenerate: { directory: 'referencia/seletores' } }],
							collapsed: true,
						},
						{
							label: 'Extras',
							items: [{ autogenerate: { directory: 'referencia/extras' } }],
							collapsed: true,
						},
						{
							label: 'Variáveis',
							items: [{ autogenerate: { directory: 'referencia/variaveis' } }],
							collapsed: true,
						},
						{
							label: 'Contratos',
							items: [{ autogenerate: { directory: 'referencia/contratos' } }],
							collapsed: true,
						},
						{
							label: 'Outros',
							items: [{ autogenerate: { directory: 'referencia/outros' } }],
							collapsed: true,
						},
						{
							label: 'PseudoWired',
							slug: 'referencia/pseudowired',
							badge: {
								text: "Novo",
								variant: "tip"
							},
						},
					],
				}, {
					label: 'Sobre Nós',
					items: [
						{
							label: 'Wired Club',
							slug: 'sobre-nos/wired-club',
						},
						{
							label: 'Contribuidores',
							slug: 'sobre-nos/contribuidores',
						},
						{
							label: 'Como contribuir',
							slug: 'sobre-nos/como-contribuir',
						},
						{
							label: 'Mudanças Recentes',
							link: '/mudancas-recentes',
							badge: {
								text: "Novo",
								variant: "tip"
							}
						}
					],
				}
			],
			customCss: ['./src/styles/global-style.css'],
			editLink: {
				baseUrl: 'https://github.com/wiredclub/docs/edit/main/',
			},
			lastUpdated: true,
			plugins: [starlightThemeWiredClub(), starlightLlmsTxt(), starlightPageReader({ pages: true }), starlightSeo({
				titleTemplate: '%s | Wired Club Docs',
				keywords: ['Wired', 'Habbo', 'programação visual', 'documentação'],
				robots: { index: true, follow: true, maxImagePreview: 'large' },
				structuredData: true,
				thumbnails: {
					cache: true,
					routeMappings: [{ from: 'mudancas-recentes' }],
					additionalPages: {
						'404': {
							title: 'Página não encontrada',
							description: 'O conteúdo que você procurou não está disponível.',
						},
						'mudancas-recentes': {
							title: 'Mudanças recentes',
							description: 'Acompanhe as últimas atualizações da documentação Wired Club.',
						},
					},
					logo: { path: './src/assets/logo_docs.png', size: [512] },
					fonts: [
						'./node_modules/@fontsource/noto-sans/files/noto-sans-latin-400-normal.woff',
						'./node_modules/@fontsource/noto-sans/files/noto-sans-latin-800-normal.woff',
					],
					bgGradient: [[11, 21, 48], [6, 14, 34]],
					border: { color: [42, 169, 255], width: 12, side: 'inline-start' },
					font: {
						title: { families: ['Noto Sans'] },
						description: { families: ['Noto Sans'] },
					},
				},
			}), starlightScrollToTop({
				tooltipText: 'Voltar ao topo',
				showTooltip: true,
				borderRadius: '50',
				showProgressRing: true,
				progressRingColor: 'white',
			}), starlightRecentChanges({
				routeSlug: 'mudancas-recentes',
				dateFormat: 'pt-BR',
			}),
			viewTransitions({
				declarativeNames:
					":root:not(:has(.hero)) .site-title img, :root:has(.hero) .hero img = site-logo",
			})
			],
		}),
		AstroPWA({
			// Temporariamente desativando cache do Service Worker
			selfDestroying: true,
			manifestFilename: "webmanifest.json",
		}),
	],
	markdown: {
		processor: satteri({
			hastPlugins: [hastMarkEndOfMarkdown],
		}),
	},
});
