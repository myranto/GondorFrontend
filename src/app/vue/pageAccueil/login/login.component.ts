import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BienvenueComponent } from '../bienvenue/bienvenue.component';
import { ClientService } from '../../../service/client/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  pseudo: string = '';
  password: string = '';

  constructor(
    public dialog: MatDialog,
    private clientService: ClientService
  ) {}

  onSubmit() {
    // Implémentez la logique de connexion ici        
    this.clientService.login(this.pseudo, this.password);

    console.log(this.clientService.getCurrentClient());    
  }  

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(BienvenueComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialogue a été fermé');
    });
  }
}
