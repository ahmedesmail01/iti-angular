import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { Order } from './components/order/order';
import { NotFound } from './components/not-found/not-found';
import { Vision } from './components/vision/vision';
import { Values } from './components/values/values';
import { Details } from './components/details/details';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', component: Home },
  {
    path: 'about',
    component: AboutUs,
    children: [
      //   { path: '', component: Vision },
      { path: '', pathMatch: 'full', redirectTo: 'vision' },
      { path: 'vision', component: Vision },
      { path: 'values', component: Values },
    ],
  },
  { path: 'products', component: Order },
  { path: 'details/:id', component: Details },

  { path: '**', component: NotFound },
];
