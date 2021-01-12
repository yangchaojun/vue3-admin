import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { modifyVars } from './build/config/lessModifyVars'
import { resolve } from 'path'

function pathResolve(dir: string) {
  console.log(resolve(__dirname, '.', dir))
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  alias: {
    '/@/': `${pathResolve('src')}/`
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // reference:  Avoid repeated references
          hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
          ...modifyVars
        },
        javascriptEnabled: true
      }
    }
  },
  plugins: [vue()],
  optimizeDeps: {
    include: ['moment/dist/locale/zh-cn']
  }
})
