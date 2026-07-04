import { defineConfig } from 'astro/config';
import tailwindvite from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL-ul tău final (asigură-te că domeniul alexavolt.ro este legat la acest repo)
  site: 'https://www.alexavolt.ro',
  
  // Schimbăm baza la '/' pentru că acum site-ul stă la rădăcină, 
  // nu mai este într-un subfolder precum /playground2
  base: '/',

  // URL-uri cu trailing slash (consistent cu ce a indexat Google)
  trailingSlash: 'always',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindvite()],
  },
});
