import { Component } from '@angular/core';
import { BuyButtonComponent } from '../../component/buy-button/buy-button.component';
import { CatalogService } from '../../../service/catalog/catalog.service';
import { ClientService } from '../../../service/client/client.service';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BuyButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  client: any;
  todayProduct : any={};

  constructor(
    private catalogService: CatalogService,
    private clientService: ClientService
  ){

  }

  ngOnInit(): void {
    this.catalogService.getTodayProduct().subscribe({
      next: v => {
        console.log(v);
        this.todayProduct = v
      },
      error: err => {
        console.log(err)
      }
    })
    
    this.client= this.clientService.getCurrentClient();
    
  }


}
