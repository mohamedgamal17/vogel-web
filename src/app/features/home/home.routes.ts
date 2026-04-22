import type { Routes } from '@angular/router';
import { MainLayout } from '../../layouts/main-layout/main-layout';

export function provideHomeRoutes(): Routes {
  return [
    {
      path: '',
      component: MainLayout,
      children: [
        {
          path: '',
          pathMatch: 'full',
          loadComponent: () =>
            import('./pages/home-page/home-page').then((m) => m.HomePage),
        },
      ],
    },
  ];
}
