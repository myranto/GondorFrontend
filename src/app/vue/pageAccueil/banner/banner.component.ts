import { Component } from '@angular/core';
import { BuyButtonComponent } from '../../../component/buy-button/buy-button.component';
import { CatalogService } from '../../../service/catalog/catalog.service';
import { ClientService } from '../../../service/client/client.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  todayProduct : any;
  isConnected: boolean = false;

  constructor(
    public dialog: MatDialog,
    private catalogService: CatalogService,
    private clientService: ClientService
  ){
    this.isConnected = false;
  }


  ngOnInit(): void {
    this.catalogService.getTodayProduct().subscribe({
      next: v => {
        this.todayProduct = v
      },
      error: err => {
        console.log(err)
      }
    })
    this.clientService.currentClient$.subscribe((client: any) => {
      this.isConnected = this.clientService.isconnected();
      console.log(this.clientService.isconnected())
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
