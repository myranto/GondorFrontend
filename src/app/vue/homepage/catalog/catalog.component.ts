import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CatalogItemComponent } from '../catalog-item/catalog-item.component';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../../../service/catalog/catalog.service';
import { TitleService } from '../../../service/title/title.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [BannerComponent, CommonModule,CatalogItemComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  title = 'Liste des produits - Magic VenteStock, site de E-commerce';
  catalogItems: any;

  constructor(private catalogService: CatalogService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.catalogService.getCatalogItems().subscribe({
      next: v => {
        this.catalogItems = v
      },
      error: err => {
        console.log(err)
      }
    })
     
    
    this.titleService.setTitle(this.title);
  }
}