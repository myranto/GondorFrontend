import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../../service/client/client.service';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrl: './bienvenue.component.css'
})
export class BienvenueComponent {
  client: string;
  constructor(    
    private clientService: ClientService
  ) {}
  
  ngOnInit(): void {
    this.clientService.currentClient$.subscribe((client: any) => {      
      this.client = client;
    });
  }
}
