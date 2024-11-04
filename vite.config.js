import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 // base : '/React/todo/dist/', // uso isso aki se o sistema nao estiver na pasta raiz coloco a pasta onde o sistema vai ficar
})
