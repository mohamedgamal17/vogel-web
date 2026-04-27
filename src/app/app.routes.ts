import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing.routes').then((m) => m.provideLandingRoutes()),
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.provideHomeRoutes()),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.routes').then((m) => m.provideProfileRoutes()),
  },
];
