import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
// import { GridModule } from 'primeng/grid';
import { MessageService } from 'primeng/api';

// Application Components
import { AppComponent } from './app.component';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { DocumentComponent } from './features/components/document/document.component';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { CaseComponent } from './features/components/case/case.component'; // Update with the correct path
import { DialogModule } from 'primeng/dialog';  // Import DialogModule
import { MenuModule } from 'primeng/menu';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CarouselModule,
    CardModule,
    FileUploadModule,
    ButtonModule,
    BadgeModule,
    ProgressBarModule,
    CommonModule,
    SliderModule,
    DropdownModule,
    TableModule,
    TagModule,
    InputTextModule,
    ToastModule,
    TableModule,
    DialogModule,
     MenuModule 
    
  ],
  declarations: [DocumentComponent, AppComponent,CaseComponent],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
