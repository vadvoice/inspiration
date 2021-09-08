import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: { loaderOptions: { sass: { additionalData: ` @import "@/style/index.scss"; ` } } }
})
