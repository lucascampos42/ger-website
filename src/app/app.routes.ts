import { Routes } from '@angular/router';
import {PublicComponent} from "./public/public.component";
import {publicRoutes} from "./public/public.routes";

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: publicRoutes,
  },
  { path: '**', redirectTo: '' },
];
