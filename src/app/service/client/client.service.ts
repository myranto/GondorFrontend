import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private currentClientSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentClient$: Observable<any> = this.currentClientSubject.asObservable();

  isconnected(): boolean {
    return !!this.currentClientSubject.getValue();
  }

  login(pseudo: any, mdp: any): void {
    const clientData = { numero: 'a', pseudo: pseudo, motDePasse: mdp, nom: "La Communaute", prenom: "Jar"};
    this.currentClientSubject.next(clientData);
  }

  getCurrentClient(): any {
    return this.currentClientSubject.getValue();
  }

  logout(): void {
    // Déconnexion en émettant null comme valeur du client actuel
    this.currentClientSubject.next(null);
  }
}