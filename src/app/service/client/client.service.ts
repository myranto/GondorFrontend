import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private currentClientSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentClient$: Observable<any> = this.currentClientSubject.asObservable();

  constructor() {
    const clientData = JSON.parse(localStorage.getItem('currentClient') || 'null');
    this.currentClientSubject = new BehaviorSubject<any>(clientData);
    this.currentClient$ = this.currentClientSubject.asObservable();
  }

  isconnected(): boolean {
    return !!this.currentClientSubject.getValue() || !!localStorage.getItem('currentClient');
  }

  login(pseudo: any, mdp: any): void {
    const clientData = { numero: 'a', pseudo: pseudo, motDePasse: mdp, nom: "La Communaute", prenom: "Jar" };
    localStorage.setItem('currentClient', JSON.stringify(clientData));
    this.currentClientSubject.next(clientData);
  }

  getCurrentClient(): any {
    const clientData = this.currentClientSubject.getValue();
    return clientData || JSON.parse(localStorage.getItem('currentClient') || 'null');
  }

  logout(): void {
    // Déconnexion en émettant null comme valeur du client actuel
    localStorage.removeItem('currentClient');
    this.currentClientSubject.next(null);
  }
}
