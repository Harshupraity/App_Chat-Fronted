import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/covite 
export default defineConfig({
  plugins: [react()],
})
