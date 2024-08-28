import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/AuthService/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  model!: any[];


  constructor(private authService: AuthService) {}

  ngOnInit() {
    const role = this.authService.getRole();

    if (role === 'client'){
    this.model = [
      {
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/main/dashboard'],
          },
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-chart-line',
            routerLink: ['/main/dashboard'],
          },
          {
            label: 'Preferences',
            icon: 'pi pi-fw pi-star',
            routerLink: ['/main/dashboard'],
          },
          {
            label: 'Lawyers',
            icon: 'pi pi-fw pi-user',   

            routerLink: ['/main/dashboard'],
          },
          {
            label: 'Documents',
            icon: 'pi pi-fw pi-file',
            routerLink: ['main/home/document'],
          },
          {
            label: 'Cases',
            icon: 'pi pi-fw pi-history',
            routerLink: ['/main/home/case'],
          },
          {
            label: 'Advanced Cases Dashboard',
            icon: 'pi pi-fw pi-history',
            routerLink: ['/main/home/cases'],
          },
          {
            label: 'Client Case Details',
            icon: 'pi pi-fw pi-history',
            routerLink: ['/main/home/client-details'],
          },
          {
            label: 'Calendar',
            icon: 'pi pi-fw pi-calendar',
            routerLink: ['/main/dashboard'],
          },
          {
            label: 'Payables',
            icon: 'pi pi-fw pi-dollar',
            routerLink: ['/main/dashboard'],
          },
          {
            label: 'Receivables',
            icon: 'pi pi-fw pi-check-circle',
            routerLink: ['/main/dashboard'],
          },
          
          
          
          // {
          //   label: 'Admin',
          //   icon: 'pi pi-fw pi-lock',
          //   items: [
          //     {
          //       label: 'Users',
          //       icon: 'pi pi-fw pi-user',
          //       routerLink: ['/main/dashboard/admin/users'],
          //     },
          //     {
          //       label: 'Roles',
          //       icon: 'pi pi-fw pi-users',
          //       routerLink: ['/main/dashboard/admin/roles'],
          //     },
          //   ],
          // },
        ],
      },
    ];
  }
    else if (role === 'lawyer') {
      this.model = [
        {
          items: [
            {
              label: 'Lawyer Dashboard',
              icon: 'pi pi-fw pi-chart-line',
              routerLink: ['/main/lawyer-dashboard'],
            },
            {
              label: 'Cases',
              icon: 'pi pi-fw pi-history',
              routerLink: ['/main/cases'],
            },
            {
              label: 'Ratings',
              icon: 'pi pi-fw pi-users',
              routerLink: ['/main/clients'],
            },
           
            {
              label: 'Calendar',
              icon: 'pi pi-fw pi-calendar',
              routerLink: ['/main/calendar'],
            },
            {
              label: 'invoices',
              icon: 'pi pi-fw pi-users',
              routerLink: ['/main/clients'],
            },
            {
              label: 'Payables',
              icon: 'pi pi-fw pi-dollar',
              routerLink: ['/main/payables'],
            },
            {
              label: 'Receivables',
              icon: 'pi pi-fw pi-users',
              routerLink: ['/main/clients'],
            },
          ],
        },
      ];
    }
    else if (role === 'firms') {
      this.model = [
        {
          items: [
            {
              label: 'Firms Dashboard',
              icon: 'pi pi-fw pi-chart-line',
              routerLink: ['/main/lawyer-dashboard'],
            },
            {
              label: 'Preferences',
              icon: 'pi pi-fw pi-history',
              routerLink: ['/main/cases'],
            },
            {
              label: 'Lawyers',
              icon: 'pi pi-fw pi-users',
              routerLink: ['/main/clients'],
            },
           
            {
              label: 'Clients',
              icon: 'pi pi-fw pi-users',
              routerLink: ['/main/calendar'],
            },
            // {
            //   label: 'invoices',
            //   icon: 'pi pi-fw pi-users',
            //   routerLink: ['/main/clients'],
            // },
            // {
            //   label: 'Payables',
            //   icon: 'pi pi-fw pi-dollar',
            //   routerLink: ['/main/payables'],
            // },
            // {
            //   label: 'Receivables',
            //   icon: 'pi pi-fw pi-users',
            //   routerLink: ['/main/clients'],
            // },
          ],
        },
      ];
    }
    
  }
}
