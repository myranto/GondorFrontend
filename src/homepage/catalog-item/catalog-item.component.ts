import { Component, Input } from '@angular/core';
import { BuyButtonComponent } from '../../component/buy-button/buy-button.component';
@Component({
  selector: 'app-catalog-item',
  standalone: true,
  imports: [BuyButtonComponent],
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.css'
})
export class CatalogItemComponent {
  @Input() item: any;
}
