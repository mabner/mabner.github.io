import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProfessionalView from '../views/ProfessionalView.vue';
import AcademicView from '../views/AcademicView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/professional',
		name: 'Professional',
		component: ProfessionalView,
	},
	{
		path: '/academic',
		name: 'Academic',
		component: AcademicView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
