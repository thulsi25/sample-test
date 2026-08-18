import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'modus-index',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === '/' || req.url === '/index.html') {
            req.url = '/modus.html'
          }
          next()
        })
      },
    },
  ],
  server: {
    port: 5177,
    strictPort: true,
  },
  preview: {
    port: 4174,
    strictPort: true,
  },
  build: {
    outDir: 'dist-modus',
    rollupOptions: {
      input: resolve(import.meta.dirname, 'modus.html'),
    },
  },
})
