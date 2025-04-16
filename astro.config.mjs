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
					label: 'Guides',
					items: [
						{ label: 'Overview', slug: 'guides/overview' },
						{ label: 'Board', slug: 'guides/board' },
						{ label: 'Snaps', slug: 'guides/snaps' },
					],
				},
				{
					label: 'Projects',
					items: [
						{ label: 'Underware', slug: 'projects/underware' },
					],
				},
			],
		}),
	],
});
