import type{ RouteRecordRaw } from "vue-router";
import Layout from '@/Layout/index.vue'
// index为默认导出文件

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children:[
      {
        path:'/',
        name:'Home',
        component: () => import('@/views/Home/HomeView.vue'),
      },
      {
        path:'/login',
        name:'Login',
        component: () => import('@/views/Login/LoginView.vue'),
      }
    ]
  },

]

export default routes
