import type { Routes } from '@angular/router';
import { MainLayout } from '../../layouts/main-layout/main-layout';

export function provideProfileRoutes(): Routes {
  return [
    {
      path: '',
      component: MainLayout,
      children: [
        {
          path: '',
          pathMatch: 'full',
          loadComponent: () =>
            import('./pages/profile-preview-page/profile-preview-page').then(
              (m) => m.ProfilePreviewPage,
            ),
        },
      ],
    },
  ];
}
