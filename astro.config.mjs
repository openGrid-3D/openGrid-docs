// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://frenchiveruti.github.io/openGrid-docs/',
	base: '/openGrid-docs',
	integrations: [
		starlight({
			title: 'openGrid',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/openGrid-3D/openGrid-docs' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Overview', link: '/guides/' },
						{ label: 'Quickstart', link: '/guides/quickstart/' },
						{ label: 'Board', link: '/guides/board' },
						{ label: 'Snaps', link: '/guides/snaps' },
						{ label: 'Printing instructions', link: '/guides/printing' },
						{ label: 'Modeling', link: '/guides/modeling' },
					]
				},
				{
					label: 'Compatible projects',
					items: [
						{ label: 'Multiconnect', slug: 'projects/multiconnect' },
						{ label: 'Underware', slug: 'projects/underware' },
						{ label: 'Gridfinity', slug: 'projects/gridfinity' },
						{ label: 'Deskware', slug: 'projects/deskware' },
						{ label: 'NeoGrid', slug: 'projects/neogrid' },
					],
				},
				{ label: 'Useful links', link: '/links' }
			],
		}),
	],
});
