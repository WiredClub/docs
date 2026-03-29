// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wiredclub.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Wired Club Docs',
      		description: 'Documentação oficial da comunidade Wired Club, o maior portal Wired!',
			social: [
				{ icon: 'external', label: 'Website', href: 'https://wiredclub.com.br/' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/wiredclub/docs' }
			],
			sidebar: [
				{
					label: 'Vamos Começar',
					autogenerate: { directory: 'vamos-comecar' },
					// items: [
					// 	{ label: 'Introdução', slug: 'vamos-comecar/introducao' },
					// 	{ label: 'Como Funcionam', slug: 'vamos-comecar/como-funciona' },
					// 	{ label: 'Tipos de Wired', slug: 'vamos-comecar/tipos-de-wired' },
					// ],
				},
				{
					label: 'Referência',
					items: [
						{
							label: 'Ativadores',
							autogenerate: { directory: 'referencia/ativadores' },
							collapsed: true,
						},
					],
				},
			],
		}),
	],
});
