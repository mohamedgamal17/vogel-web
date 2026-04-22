import type { Routes } from '@angular/router';
import { PublicLayout } from '../../layouts/public-layout/public-layout';

export function provideLandingRoutes(): Routes {
  return [
    {
      path: '',
      component: PublicLayout,
      children: [
        {
          path: '',
          pathMatch: 'full',
          loadComponent: () =>
            import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
        },
      ],
    },
  ];
}
