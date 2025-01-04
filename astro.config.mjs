// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
      starlight({
          title: 'Minenkolonien',
          social: {
              github: 'https://github.com/soudasuwa/minenkolonien-docs',
          },
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
              {
                  label: 'Release Notes',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'v0.0.3', slug: 'release/v0.0.3' },
                  ],
              },
          ],
      }),
	],

  adapter: node({
    mode: 'standalone',
  }),
});