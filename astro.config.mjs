// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'dist',
  },
  vite: {
    plugins: [tailwind()],
  }
});