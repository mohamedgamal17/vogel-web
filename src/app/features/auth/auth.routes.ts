import type { Routes } from '@angular/router';
import { PublicLayout } from '../../layouts/public-layout/public-layout';

export function provideAuthRoutes(): Routes {
  return [
    {
      path: '',
      component: PublicLayout,
      children: [
        {
          path: '',
          pathMatch: 'full',
          loadComponent: () =>
            import('./pages/sign-in-page/sign-in-page').then((m) => m.SignInPage),
        },
      ],
    },
  ];
}
