import type { Routes } from '@angular/router';

export function provideLandingRoutes(): Routes {
  return [
    {
      path: '',
      pathMatch: 'full',
      loadComponent: () =>
        import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
    },
  ];
}
