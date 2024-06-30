import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/PageHome.vue'
import PageAbout from '@/pages/PageAbout.vue'

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
		}
	]
})

export default router
