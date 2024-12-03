import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@models': path.resolve(__dirname, '/home/abdulla/Documents/Github Documents/edu_vr/Test (Study)/models'),
      "@damn": path.resolve(__dirname, '/home/abdulla/Documents/Github\ Documents/edu_vr/Test\ (Study)/Test04\ -\ Click\ Orbit\ Blender\ Box/Box.glb'),
    },
  },
  server: {
    port: 3000, // Optionally change the port if you need to
    fs: {
      // Allow serving files from parent directory
      allow: ['..'],
    }
  },
  base: '/Live-Website/', // Replace with the name of your GitHub repository
});
