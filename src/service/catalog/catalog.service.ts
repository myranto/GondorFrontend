import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  getCatalogItems() {
    return [
      { name: "Aragorn's Sword", price: 500, image: 'assets/aragorn-sword.jpg' },
      { name: "Gandalf's Staff", price: 300, image: 'assets/gandalf-staff.jpg' },
      { name: "Frodo's Mithril Shirt", price: 350, image: 'assets/frodo-mithril-shirt.jpg' },
      { name: "Galadriel's Mirror", price: 200, image: 'assets/galadriel-mirror.jpg' },
      { name: "Sauron's Mace", price: 400, image: 'assets/sauron-mace.jpg' },
      { name: "Eowyn's Shieldmaiden Armor", price: 450, image: 'assets/eowyn-armor.jpg' },
      { name: "Legolas' Bow and Arrows", price: 250, image: 'assets/legolas-bow.jpg' },
      { name: "Bilbo's Magic Ring", price: 150, image: 'assets/bilbo-ring.jpg' }
    ];
  }
}
