import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then( m => m.HomeComponent),
    pathMatch: 'full',
    data: { title: 'G&R - Home' }
  },
  {
    path: 'blog',
    data: { title: 'G&R - Blog' },
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/blog/blog.component').then( m => m.BlogComponent),
      },
      {
        path: 'post/:id',
        loadComponent: () => import('./pages/blog/post/post.component').then( m => m.PostComponent),
      }
    ]
  },
];
