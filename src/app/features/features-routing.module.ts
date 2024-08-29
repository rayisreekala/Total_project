import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { UsersComponent } from './components/admin/users/users.component';
import { CreateEditUserComponent } from './components/admin/create-edit-user/create-edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DocumentComponent } from './components/document/document.component';
import { CaseComponent } from './components/case/case.component';
import { CasesComponent } from './components/cases/cases.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { LawyersComponent } from './components/lawyers/lawyers.component';
import { Breadcrumb } from 'primeng/breadcrumb';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'dashboard',
        component: DashboardComponent, // HomeComponent for home path
      },

      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'document',
        component: DocumentComponent,
      },
      {
        path: 'case',
        component: CaseComponent,
      },
      {
        path: 'cases',
        component: CasesComponent,
      },
      {
        path: 'client-details',
        component: ClientDetailsComponent,
      },
      {
        path: 'lawyers',
        component: LawyersComponent
      },

      // {
      //   path: 'admin',
      //   component: AdminComponent,
      //   children: [
      //     { path: 'users', component: UsersComponent },
      //     { path: 'roles', component: RolesComponent },
      //     { path: 'createuser', component: CreateEditUserComponent },
      //     { path: 'edituser', component: CreateEditUserComponent },
      //   ],
      // },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
