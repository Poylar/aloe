import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  base: `${process.env.NODE_GP ? '/aloe/' : ''}`,
  css: {
    devSourcemap: true,
  },
  server: {
    open: '/',
  },
  plugins: [react()],
});
