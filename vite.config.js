import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['semantic-ui-react'],
    },
    outDir: 'dist'  // This indicates that the build output directory is 'dist'
  },
  base: '/recipe_demo/'
})
