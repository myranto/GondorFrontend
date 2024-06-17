import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AccueilLayoutComponent } from './containers/accueil-layout/accueil-layout.component';
import { FooterComponent } from './containers/accueil-layout/footer/footer.component';
import { HeaderComponent } from './containers/accueil-layout/header/header.component';
import { BuyButtonComponent } from './component/buy-button/buy-button.component';
import { BannerComponent } from './vue/pageAccueil/banner/banner.component';
import { CatalogItemComponent } from './vue/pageAccueil/catalog-item/catalog-item.component';
import { CatalogComponent } from './vue/pageAccueil/catalog/catalog.component';
import { LoginComponent } from './vue/pageAccueil/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

const APP_CONTAINERS = [
    HeaderComponent,
    AccueilLayoutComponent,
    FooterComponent
  ];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    CatalogComponent,
    LoginComponent,
    BannerComponent,
    CatalogItemComponent,
    BuyButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
