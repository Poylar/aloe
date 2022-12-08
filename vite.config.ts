import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig(({command, mode}) => {
  process.env.NODE_GP = process.env.NODE_GP !== undefined ? process.env.NODE_GP : 'false';

  return {
    base: `${process.env.NODE_GP === 'true' ? '/aloe/' : ''}`,
    envDir: './',
    css: {
      devSourcemap: mode === 'development',
      modules: {
        scopeBehaviour: "local",
      }
    },
    plugins: [react()],
    build: {
      cssCodeSplit: false,
    },
    clearScreen: false,
  }
});
