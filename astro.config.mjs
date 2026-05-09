import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Check if we are building for production (GitHub Pages)
const isProd = import.meta.env.PROD;

export default defineConfig({
  // In production, use your domain. Locally, Astro handles the URL automatically.
  site: 'https://www.alexavolt.ro',
  
  // Base path: Only apply '/playground2' when in production
  base: isProd ? '/' : '/playground2',
  
  trailingSlash: 'always',
  
  integrations: [tailwind()],
});