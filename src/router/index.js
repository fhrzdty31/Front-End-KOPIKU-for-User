import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BuatPesanan from '@/views/BuatPesanan.vue'
import Detail from '@/views/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pesan',
    name: 'pesan',
    component: BuatPesanan
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
