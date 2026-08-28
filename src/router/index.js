import AppAboutMe from '@/components/AppAboutMe.vue'
import AppContactMe from '@/components/AppContactMe.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppProjects from '@/components/portfolio/AppProjects.vue'
import BosqueSentidos from '@/components/portfolio/projects/BosqueSentidos.vue'
import BreakHouse from '@/components/portfolio/projects/BreakHouse.vue'
import CajaClub from '@/components/portfolio/projects/CajaClub.vue'
import CiaJeruncio from '@/components/portfolio/projects/CiaJeruncio.vue'
import ComunidadCocinera from '@/components/portfolio/projects/ComunidadCocinera.vue'
import EsquinaCultural from '@/components/portfolio/projects/EsquinaCultural.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppHeader
    },
    {
      path: '/sobre-mi',
      component: AppAboutMe
    },
    {
      path: '/portfolio',
      component: AppProjects,
      children: [
        {
          path: 'esquina-cultural',
          component: EsquinaCultural
        },
        {
          path: 'bosque-de-los-sentidos',
          component: BosqueSentidos
        },
        {
          path: 'break-house',
          component: BreakHouse
        },
        {
          path: 'comunidad-cocinera',
          component: ComunidadCocinera
        },
        {
          path: 'caja-club',
          component: CajaClub
        },
        {
          path: 'cia-jeruncio',
          component: CiaJeruncio
        },
      ]
    },
    {
      path: '/contacto',
      component: AppContactMe
    },
  ],
})

export default router
