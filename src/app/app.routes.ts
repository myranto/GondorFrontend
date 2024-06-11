import { Routes } from '@angular/router';
import { CatalogComponent } from './vue/homepage/catalog/catalog.component';


export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: '**', redirectTo: '/catalog' }
];
