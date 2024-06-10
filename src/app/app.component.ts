import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../common/header/header.component';
import { BannerComponent } from '../homepage/banner/banner.component';
import { CatalogItemComponent } from '../homepage/catalog-item/catalog-item.component';
import { CatalogComponent } from '../homepage/catalog/catalog.component';
import { FooterComponent } from '../common/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CatalogComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Magic VenteStock, E-commerce';
}
