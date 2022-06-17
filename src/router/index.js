import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/about',
			component: () => import('../views/About.vue'),
		},
		{
			path: '/contact',
			component: () => import('../views/Contact.vue'),
		},
		{
			path: '/overview',
			component: () => import('../views/Overview.vue'),
		},
		{
			path: '/terminal',
			component: () => import('../views/Terminal.vue'),
		}
	],
});

export default router;
