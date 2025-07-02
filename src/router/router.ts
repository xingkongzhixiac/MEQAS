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
        path:'/home',
        name:'Home',
        component: () => import('@/views/Home/HomeView.vue'),
      }
    ]
  },

]

export default routes
