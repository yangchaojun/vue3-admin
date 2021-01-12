import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { modifyVars } from './build/config/lessModifyVars'
import { wrapperEnv } from './build/utils'
import { resolve } from 'path'

function pathResolve(dir: string) {
  console.log(resolve(__dirname, '.', dir))
  return resolve(__dirname, '.', dir)
}
const root: string = process.cwd()

export default ({ command, mode }: ConfigEnv): UserConfig => {
  console.log({ command, mode })
  console.log(loadEnv(mode, root))
  return {
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
  }
}
