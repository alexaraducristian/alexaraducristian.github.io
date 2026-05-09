import { defineConfig } from 'astro/config';
import tailwindvite from '@tailwindcss/vite';

// Astro handles the environment automatically with import.meta.env
export default defineConfig({
  site: 'https://www.alexavolt.ro',
  // This logic is crucial for GitHub Pages subfolders
  base: process.env.NODE_ENV === 'production' ? '/playground2' : '/',
  // trailingSlash: 'always',
  vite: {
    plugins: [tailwindvite()],
  },
});