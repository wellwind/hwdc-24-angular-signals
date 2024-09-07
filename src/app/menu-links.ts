import { Route } from '@angular/router';

export interface MenuLink extends Route {
  title?: string;
}

export type MenuLinks = Array<MenuLink>;

export const menuLinks: MenuLinks = [
  {
    path: 'quick-start',
    title: 'Quick Start',
    loadComponent: () => import('./demo/demo-01-quick-start.component'),
  },
  {
    path: '',
    redirectTo: 'quick-start',
    pathMatch: 'full',
  },
];
