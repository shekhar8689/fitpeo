import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { VitePluginGHPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), VitePluginGHPages()],
  base: 'https://shekhar8689.github.io/fitpeo', 
});
