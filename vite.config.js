import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // ...whatever you already have...
  base: "/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});