import { Injectable } from '@angular/core';
import {BehaviorSubject, firstValueFrom, Observable, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  postUrl = `http://localhost:8081`
  private currentClientSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentClient$: Observable<any> = this.currentClientSubject.asObservable();

  constructor(private http: HttpClient) {
    const clientData = JSON.parse(localStorage.getItem('currentClient') || 'null');
    this.currentClientSubject = new BehaviorSubject<any>(clientData);
    this.currentClient$ = this.currentClientSubject.asObservable();
  }

  isconnected(): boolean {
    return !!this.currentClientSubject.getValue() || !!localStorage.getItem('currentClient');
  }

  async login(pseudo: any, mdp: any) {
    const person = {
      username: pseudo,
      password: mdp,
    }
     try {
       const response = await firstValueFrom(
         this.http.post(this.postUrl + '/login', person)
       );
       const clientData = { numero: 'a', pseudo: pseudo, motDePasse: mdp, nom: "La Communaute", prenom: "Jar" };
       localStorage.setItem('currentClient', JSON.stringify(clientData));
       this.currentClientSubject.next(clientData);
       return true;
     } catch (error) {
       // Handle error here
       console.error(error);
       return false;
     }
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
