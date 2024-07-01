import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogService <T>{

  constructor(private http: HttpClient) { }
  //postUrl = `http://localhost:8081`
  postUrl = url

  getCatalogItems():Observable<any> {
    return  this.http.get(this.postUrl, {headers})
  }

  getTodayProduct() {
    return this.http.get<T>(`${this.postUrl}`.concat('/du-jour'), {headers})
    // return { name: "Baton enchanté de Lumos", price: 500, image: 'assets/products/Enchanted-wand-of-lumos.webp' };
  }
}
export const url = "https://bd82-102-17-141-74.ngrok-free.app";
// export const url = "http://localhost:8081";
export const headers = new HttpHeaders({
  'ngrok-skip-browser-warning': 'true',
});
