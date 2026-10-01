import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sidhanshuudawat.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
