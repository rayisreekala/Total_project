import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MainComponent } from '../main/main.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent implements OnInit{
  username: string | null = '';
  constructor(
    public app: AppComponent,
    public mainComponent: MainComponent,
    private route: Router
  ) {}
  ngOnInit(): void {
    const fullUsername = localStorage.getItem('username'); // Retrieve the full email
    if (fullUsername) {
      this.username = fullUsername.split('@')[0]; // Get the name before '@'
    }
  }
  
  public logout() {
    this.route.navigate(['/login']);
  }
  public Profile() {
    this.route.navigate(['/main/home/profile']);
  }
}
