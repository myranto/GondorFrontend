import { Component } from '@angular/core';
import { CatalogService } from '../../service/catalog/catalog.service';
import { BuyButtonComponent } from '../../component/buy-button/buy-button.component';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BuyButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  todayProduct : any;

  constructor(private catalogService: CatalogService){

  }

  ngOnInit(): void {
    this.todayProduct = this.catalogService.getTodayProduct();
  }


}
