import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // The original design is served from /old/ in CI; locally it defaults to '/'.
  base: process.env.BASE_PATH ?? '/',
})
