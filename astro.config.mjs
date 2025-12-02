import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { storyblok } from '@storyblok/astro';

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    storyblok({
      accessToken: import.meta.env.STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN,
      bridge: import.meta.env.DEV,
      apiOptions: {
        region: 'us',
      },
    }),
  ],
});
