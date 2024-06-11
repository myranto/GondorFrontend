import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getCurrentClient() {
    return { nom: "La communaute", prenom: "Jar" };
  }
}
