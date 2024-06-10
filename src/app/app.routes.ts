import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogComponent } from '../homepage/catalog/catalog.component';

export const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: '**', redirectTo: '/catalog' }
];
