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
						{ label: 'Multiconnect', link: '/projects/multiconnect' },
						{ label: 'Underware', link: '/projects/underware' },
						{ label: 'Gridfinity', link: '/projects/gridfinity' },
						{ label: 'Deskware', link: '/projects/deskware' },
						{ label: 'NeoGrid', link: '/projects/neogrid' },
						{ label: 'TinyRack', link: '/projects/tinyrack' },
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
