import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // enable @ in SCSS too
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/sass/variables" as *;
          @use "@/assets/sass/breakpoints" as *;
          @use "@/assets/sass/mixins" as *;
        `
      }
    }
  }
})
