import { Spin } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { App } from 'vue'

export function registerGlobalComp(app: App<Element>) {
  app.use(Spin)
}
