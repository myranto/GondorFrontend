import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
  error: boolean = false;

  constructor(
    public dialog: MatDialog,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  onSubmit() {
    // Implémentez la logique de connexion ici
    this.clientService.login(this.pseudo, this.password);

    // si la connexion est un succès, fermez la boîte de dialogue et affichez un message de bienvenue
    // changer la condition
    if(true){
      

      // ouvrez la boîte de dialogue de bienvenue
      this.openLoginDialog();
      // fermez la boîte de dialogue de connexion
      this.dialogRef.close();
    }else{
      // sinon, affichez un message d'erreur
      console.log("Erreur de connexion");
      this.error = true;
    }

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
