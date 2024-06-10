import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CatalogItemComponent } from '../catalog-item/catalog-item.component';
import { CatalogService } from '../../service/catalog/catalog.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [BannerComponent,CatalogItemComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  catalogItems: any[];

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogItems = this.catalogService.getCatalogItems();
  }
}
