import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // The new design is served from /new/ in CI; locally it defaults to '/'.
  base: process.env.BASE_PATH ?? '/',
})
