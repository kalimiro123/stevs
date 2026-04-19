import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./_pages/home/components/home'),
		pathMatch: 'full',
		title: 'Accueil',
	},
	{
		path: 'home',
		loadComponent: () => import('./_pages/home/components/home'),
		pathMatch: 'full',
		title: 'Accueil',
	},
	{
		path: 'expertises',
		loadComponent: () => import('./_pages/expertise/components/expertise'),
		title: 'Expertises',
	},
	{
		path: 'offres',
		loadComponent: () => import('./_pages/offres/components/offre'),
		title: 'Offres',
	},
	{
		path: 'Evenements',
		loadComponent: () => import('./_pages/events/components/events'),
		title: 'Événements',
	},
	{
		path: 'Agenda',
		loadComponent: () => import('./_pages/agenda/components/agenda'),
		title: 'Agenda',
	},
	{
		path: 'researchLab',
		loadComponent: () => import('./_pages/research/components/research'),
		title: 'Research Lab',
	},
	{
		path: 'DeveloppementDurable',
		loadComponent: () => import('./_pages/developpement/components/developpement'),
		title: 'Développement',
	},
	{
		path: 'Politiques',
		loadComponent: () => import('./_pages/politique/components/politique'),
		title: 'Politiques',
	},
	{
		path: 'Contacts',
		loadComponent: () => import('./_pages/contact/components/contact'),
		title: 'Contact',
	},
	{
		path: '**',
		redirectTo: '',
	},
];
