import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './layout/main/main.component';
import { MenuComponent } from './layout/menu/menu.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { MenuitemComponent } from './layout/menuitem/menuitem.component';
import { UsersComponent } from './components/admin/users/users.component';
import { RolesComponent } from './components/admin/roles/roles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { CreateEditUserComponent } from './components/admin/create-edit-user/create-edit-user.component';
import { RolesEditComponent } from './components/admin/roles-edit/roles-edit.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DocumentComponent } from './components/document/document.component';
import { CaseComponent } from './components/case/case.component';
import { CasesComponent } from './components/cases/cases.component';

@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    AdminComponent,
    UsersComponent,
    RolesComponent,
    TopnavComponent,
    FooterComponent,
    MenuitemComponent,
    DashboardComponent,
    BreadcrumbComponent,
    CreateEditUserComponent,
    RolesEditComponent,
    HomeComponent,
    ProfileComponent,
    CasesComponent,
    
    
  ],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FeaturesRoutingModule,
  ],
})
export class FeaturesModule {}
