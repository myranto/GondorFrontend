import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilLayoutComponent } from './containers/accueil-layout/accueil-layout.component';
import { CatalogComponent } from './vue/pageAccueil/catalog/catalog.component';
import { LoginComponent } from './vue/pageAccueil/login/login.component';

export const routes: Routes = [  
  // {path: 'catalog', component: CatalogComponent},
  {
    path: '',
    component: AccueilLayoutComponent, 
    children: [     
      // { path: 'catalog', component: CatalogComponent }
      { path: '', component: CatalogComponent }
    ]
  },
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: '**', redirectTo: '/catalog' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
