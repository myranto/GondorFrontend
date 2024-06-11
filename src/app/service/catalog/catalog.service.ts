import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  getCatalogItems() {
    return [
      { name: "Baton enchanté de Lumos", price: 500, image: 'assets/products/Enchanted-wand-of-lumos.webp' },
      { name: "Potion d'éternel jeunesse", price: 300, image: 'assets/products/Potion-of-eternal-youth.webp' },
      { name: "Crystal mythique", price: 350, image: 'assets/products/Mystic-crystal-orb.webp' },
      { name: "Elixir d'invisibilité", price: 200, image: 'assets/products/Elixir-of-invisibility.webp' },
      { name: "Dictionnaire des sorciers", price: 400, image: 'assets/products/Sorcerers-spellbook.webp' },
      { name: "Amulette de protection", price: 450, image: 'assets/products/Amulet-of-protection.webp' },
      { name: "Balaie de sorcier", price: 250, image: 'assets/products/Witchs-broomstick.webp' },
      { name: "Plume du phoenix", price: 150, image: 'assets/products/Phoenix-feather-quill.webp' }
    ];
  }

  getTodayProduct() {
    return { name: "Baton enchanté de Lumos", price: 500, image: 'assets/products/Enchanted-wand-of-lumos.webp' };
  }
}
