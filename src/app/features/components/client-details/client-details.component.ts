import { Component } from "@angular/core";


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent {
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
  products: any[] = [
    { code: 'Civil ', name: '20-1-2024', category: '862/2005', quantity: '53/2005' },
    { code: 'Criminal', name: '07-2-2024', category: '654/2005', quantity: '67/2005' }
  ];
}