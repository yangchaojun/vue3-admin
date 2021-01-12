import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/',
    component: () => import('/@/views/sys/login/Login.vue')
  }
]

// router create
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
