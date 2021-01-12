import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string) {
  console.log(resolve(__dirname, '.', dir))
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  alias: {
    '/@/': `${pathResolve('src')}/`
  },
  plugins: [vue()],
  optimizeDeps: {
    include: ['moment/dist/locale/zh-cn']
  }
})
