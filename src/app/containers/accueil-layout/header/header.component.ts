import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../vue/pageAccueil/login/login.component';
import { ClientService } from '../../../service/client/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isConnected: boolean;
  client: any;
  logStr: string;

  constructor(
    public dialog: MatDialog,
    private clientService: ClientService
  ) {
    // this.isConnected = false;
    this.clientService.currentClient$.subscribe((client: any) => {
      this.isConnected = this.clientService.isconnected();
      this.client = client;
    });
  }

  openLoginDialog(): void {
    if(this.isConnected){
      this.clientService.logout();
      this.isConnected = false;
    }else{
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '400px',
        panelClass: 'custom-dialog-container'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('Le dialogue a été fermé');
      });
    }
  }
}
