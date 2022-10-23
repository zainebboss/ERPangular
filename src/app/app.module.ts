import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { PageContentComponent } from './pages/page-content/page-content.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./Auth/_helpers/auth.interceptor";
import {HttpClientModule} from "@angular/common/http";
import { ShowabsenceComponent } from './RH/absence/showabsence/showabsence.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddbsenceComponent } from './RH/absence/addbsence/addbsence.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import  {  MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { EditAbsenceComponent } from './RH/absence/edit-absence/edit-absence.component';
import { ShowvacationComponent } from './RH/vacation/showvacation/showvacation.component';
import { AddvacationComponent } from './RH/vacation/addvacation/addvacation.component';
import { EditvacationComponent } from './RH/vacation/editvacation/editvacation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PageContentComponent,
    LoginComponent,
    RegisterComponent,
    ShowabsenceComponent,
    AddbsenceComponent,
    EditAbsenceComponent,
    ShowvacationComponent,
    AddvacationComponent,
    EditvacationComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule, 
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatRippleModule,
  


  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
