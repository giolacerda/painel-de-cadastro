import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Cadastro from '@/views/Cadastro.vue'
import Resumo from '@/views/Resumo.vue'

const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
    {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro
  },
   {
    path: '/resumo',
    name: 'resumo',
    component: Resumo
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default router
