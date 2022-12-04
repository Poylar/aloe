import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
  },
  server: {
    open: '/',
  },
  plugins: [react()],

  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
