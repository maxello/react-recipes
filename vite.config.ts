import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  const isProduction = command === 'build';

  return {
    base: isProduction ? '/react-recipes/' : '/',
    plugins: [react(), tailwindcss()],
    build: {
      outDir: 'dist',
    },
  };
});

