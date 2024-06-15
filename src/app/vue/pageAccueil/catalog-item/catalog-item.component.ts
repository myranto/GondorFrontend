import { Component, Input } from '@angular/core';
import { BuyButtonComponent } from '../../../component/buy-button/buy-button.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from '../../../service/client/client.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrl: './catalog-item.component.css'
})
export class CatalogItemComponent {
  @Input() item: any;

  isConnected: boolean = false;

  constructor(
    public dialog: MatDialog,
    private clientService: ClientService
  ){
    this.isConnected = false;
  }

  ngOnInit(): void {
    this.clientService.currentClient$.subscribe((client: any) => {
      this.isConnected = this.clientService.isconnected();      
    });
  }

  onClick(){
    if(!this.isConnected){
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
