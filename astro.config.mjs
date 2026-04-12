// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightScrollToTop from 'starlight-scroll-to-top'
import starlightRecentChanges from 'starlight-recent-changes';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiredclub.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Wired Club Docs',
			logo: {
				src: './src/assets/new_logo_square.png',
				replacesTitle: true,
			},
			description: 'Documentação oficial da comunidade Wired Club, o maior portal Wired!',
			
			locales: {
				root: {
					label: 'Português (Brasil)',
					lang: 'pt-BR',
				},
			},
			social: [
				{ icon: 'external', label: 'Website', href: 'https://wiredclub.com.br/' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/wiredclub' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/wiredclub/docs' },
			],
			sidebar: [
				{
					label: 'Vamos Começar',
					autogenerate: { directory: 'vamos-comecar' },
				}, {
					label: 'Guias práticos',
					autogenerate: { directory: 'guias-praticos' },
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
							autogenerate: { directory: 'referencia/ativadores' },
							collapsed: true,
						},
						{
							label: 'Efeitos',
							autogenerate: { directory: 'referencia/efeitos' },
							collapsed: true,
						},
						{
							label: 'Condições',
							autogenerate: { directory: 'referencia/condicoes' },
							collapsed: true,
						},
						{
							label: 'Seletores',
							autogenerate: { directory: 'referencia/seletores' },
							collapsed: true,
						},
						{
							label: 'Extras',
							autogenerate: { directory: 'referencia/extras' },
							collapsed: true,
						},
						{
							label: 'Variáveis',
							autogenerate: { directory: 'referencia/variaveis' },
							collapsed: true,
						},
						{
							label: 'Contratos',
							autogenerate: { directory: 'referencia/contratos' },
							collapsed: true,
						},
						{
							label: 'Outros',
							autogenerate: { directory: 'referencia/outros' },
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
			plugins: [starlightLlmsTxt(), starlightScrollToTop({
				tooltipText: 'Voltar ao topo',
				showTooltip: true,
				borderRadius: '50',
				showProgressRing: true,
				progressRingColor: 'white',
			}), starlightRecentChanges({
				routeSlug: 'mudancas-recentes',
			})],
		}),
	],
});
