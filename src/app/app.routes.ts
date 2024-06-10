import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'catalog', component: AppComponent },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: '**', redirectTo: '/catalog' }
];
