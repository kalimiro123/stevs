import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'expertises',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'offres',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'Evenements',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'Agenda',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'researchLab',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'DeveloppementDurable',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'Politiques',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'Contacts',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
