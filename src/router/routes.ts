import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      },
      // lazy-loaded
      {
        path: 'datos-agrupados',
        component: () => import('pages/DatosAgrupadosPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it

  // Redirect to / page, if no match found
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export default routes;
