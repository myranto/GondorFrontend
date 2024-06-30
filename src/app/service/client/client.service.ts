import { Injectable } from '@angular/core';
import {BehaviorSubject, firstValueFrom, Observable, Subject} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  postUrl = `http://localhost:8081`
  // postUrl = `https://dd98-102-17-120-107.ngrok-free.app`
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
  // updateClient(client: any): void {
  //   this.currentClientSubject.next(client);
  //   // this.isConnected = !!client; // Set isConnected based on whether client is truthy
  // }

  async login(pseudo: any, mdp: any) {
    const person = {
      username: pseudo,
      password: mdp,
    }
     try {
      const user = await firstValueFrom(
         this.http.post(this.postUrl + '/login', person)
       );

       //const clientData = { numero: 'a', pseudo: pseudo, motDePasse: mdp, nom: "La Communaute", prenom: "Jar" };
       localStorage.setItem('currentClient', JSON.stringify(user));
       this.currentClientSubject.next(user);
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
