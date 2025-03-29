import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add this alias
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Add this base configuration
  base: './',
  server: {
    // Ensure the server handles history API fallback
    historyApiFallback: true,
  },
  build: {
    // Configure the build output
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})