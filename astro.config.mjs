// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mitchchadban.com',
  integrations: [
    sitemap({
      // Exclude utility / non-content pages from the sitemap
      filter: (page) =>
        !page.includes('/404/') &&
        !page.includes('/proximamente/'),
    }),
  ],
});
