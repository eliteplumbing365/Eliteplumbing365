import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  server: {
    port: 5173,           // Optional: You can change this if needed
    open: false,          // Don't auto-open browser
  },

  build: {
    outDir: 'dist',
    sourcemap: false,     // Set to true only if you need debugging
  },
});
