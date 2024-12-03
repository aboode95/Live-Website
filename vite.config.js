import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000, // Optionally change the port if you need to
    fs: {
      // Allow serving files from parent directory
      allow: ['..'],
    }
  },
  base: '/Live-Website/', // Replace with the name of your GitHub repository
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Splitting large libraries into their own chunks
          three: ['three'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  }, 
});
