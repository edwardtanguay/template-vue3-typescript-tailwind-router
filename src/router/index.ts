import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/PageHome.vue'
import PageAbout from '@/pages/PageAbout.vue'
import PageError404 from '@/pages/PageError404.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: PageHome
		},
		{
			path: '/about',
			name: 'about',
			component: PageAbout
		},
		{
			path: '/:pathMatch(.*)*',
			component: PageError404
		}
	]
})

export default router
