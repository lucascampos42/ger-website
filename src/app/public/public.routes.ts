import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then( m => m.HomeComponent),
    pathMatch: 'full',
    data: { title: 'G&R - Home' }
  },
];
