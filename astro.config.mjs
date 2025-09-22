// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.opengrid.world',
	base: '/',
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
						{ label: 'Accessories', link: '/guides/accessories' },
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
				{
					label: 'Resources',
					items: [
						{ label: 'FAQ', link: '/faq' },
						{ label: 'Troubleshooting', link: '/troubleshooting' },
						{ label: 'Compatibility', link: '/compatibility' },
						{ label: 'Videos', link: '/videos' },
						{ label: 'Community', link: '/community' },
						{ label: 'Maintenance', link: '/maintenance' },
					],
				},
				{ label: 'Useful links', link: '/links' }
			],
		}),
	],
});
