import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GlobalConstants } from '../global-constants';
import { AuthRequestDTO } from '../../model/AuthRequestDTO';
import { TokenUser } from '../../model/TokenUser';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseURL: string = GlobalConstants.apiURL + "login";

  public errorMessage: string | undefined;
  
  private currentClientSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentClient$: Observable<any> = this.currentClientSubject.asObservable();

  constructor(
    private http: HttpClient
  ) {
    const clientData = JSON.parse(localStorage.getItem('currentClient') || 'null');
    this.currentClientSubject = new BehaviorSubject<any>(clientData);
    this.currentClient$ = this.currentClientSubject.asObservable();
  }

  isconnected(): boolean {
    return !!this.currentClientSubject.getValue() || !!localStorage.getItem('currentClient');
  }

  query_login(pseudo: any, mdp: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = { pseudo: pseudo, password: mdp };
    return this.http.post(this.baseURL, body, { headers: new HttpHeaders() })
  }

  login(username: string, password: string): void {
    const authRequestDTO: AuthRequestDTO = { username, password };
    this.http.post<TokenUser>(this.baseURL, authRequestDTO) 
    .subscribe({
      next: ( response ) => {
        console.log('Token received:', jwtDecode(response.user));
        localStorage.setItem('currentClient', JSON.stringify(response.token));
        this.currentClientSubject.next(response.token);        
      },
      error: (e: any) => {
        console.error(e)
      },
      complete: () => console.info("login complete successfuly")
    });      
    
  }

  // login(pseudo: any, mdp: any): void {
  //   // const clientData = { numero: 'a', pseudo: pseudo, motDePasse: mdp, nom: "La Communaute", prenom: "Jar" };

  //   this.query_login(pseudo, mdp)
  //   .subscribe({
  //     next: ( data ) => {
  //       localStorage.setItem('currentClient', JSON.stringify(data));
  //       this.currentClientSubject.next(data);
  //       console.info(data);
  //     },
  //     error: (e: any) => {
  //       console.error(e)
  //     },
  //     complete: () => console.info("login complete successfuly")
  //   });      

  //   // localStorage.setItem('currentClient', JSON.stringify(clientData));
  //   // this.currentClientSubject.next(clientData);
  // }

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
