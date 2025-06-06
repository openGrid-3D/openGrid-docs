// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://opengrid-3d.github.io/openGrid-docs/',
	base: 'openGrid-docs/',
	integrations: [
		starlight({
			title: 'openGrid',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/openGrid-3D/openGrid-docs' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', link: '/guides/overview/' },
						{ label: 'Tile Parameters', link: '/reference/parameters/' },
						{ label: 'Underware Integration', link: '/guides/underware/' }
					]
				},
				{
					label: 'Projects',
					items: [
						{ label: 'Underware', slug: 'projects/underware' },
						{ label: 'Gridfinity', slug: 'projects/gridfinity' },
					],
				},
			],
		}),
	],
});
