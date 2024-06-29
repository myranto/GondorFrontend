import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }
  // postUrl = `http://localhost:8081`
  postUrl = `http://localhost:8081`

  getCatalogItems():Observable<any> {
    return  this.http.get(this.postUrl)

    // return [
      // { name: "Baton enchanté de Lumos", price: 500, image: 'assets/products/Enchanted-wand-of-lumos.webp' },
      // { name: "Potion d'éternel jeunesse", price: 300, image: 'assets/products/Potion-of-eternal-youth.webp' },
      // { name: "Crystal mythique", price: 350, image: 'assets/products/Mystic-crystal-orb.webp' },
      // { name: "Elixir d'invisibilité", price: 200, image: 'assets/products/Elixir-of-invisibility.webp' },
      // { name: "Dictionnaire des sorciers", price: 400, image: 'assets/products/Sorcerers-spellbook.webp' },
      // { name: "Amulette de protection", price: 450, image: 'assets/products/Amulet-of-protection.webp' },
      // { name: "Balaie de sorcier", price: 250, image: 'assets/products/Witchs-broomstick.webp' },
      // { name: "Plume du phoenix", price: 150, image: 'assets/products/Phoenix-feather-quill.webp' }
    // ];
  }

  getTodayProduct() {
    return this.http.get(`${this.postUrl}`.concat('/du-jour'))
    // return { name: "Baton enchanté de Lumos", price: 500, image: 'assets/products/Enchanted-wand-of-lumos.webp' };
  }
}
