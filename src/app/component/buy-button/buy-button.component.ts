import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrl: './buy-button.component.css'
})
export class BuyButtonComponent {
  @Input() label: any;
}
