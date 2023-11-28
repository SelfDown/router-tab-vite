import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
const resolve = dir => path.join(__dirname, dir)
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  define:{
    'process.env':{}
  },
  resolve:{
    alias:{
      '@': resolve("./src"),
    }
  }
})
