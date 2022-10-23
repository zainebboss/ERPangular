import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./Auth/register/register.component";
import {LoginComponent} from "./Auth/login/login.component";
import { ShowabsenceComponent } from './RH/absence/showabsence/showabsence.component';
import { AddbsenceComponent } from './RH/absence/addbsence/addbsence.component';
import { ShowvacationComponent } from './RH/vacation/showvacation/showvacation.component';
import { AddvacationComponent } from './RH/vacation/addvacation/addvacation.component';
import { EditvacationComponent } from './RH/vacation/editvacation/editvacation.component';

const routes: Routes = [  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'showabsence', component: ShowabsenceComponent },
  { path: 'addabsence', component: AddbsenceComponent },
  { path: 'showvacation', component: ShowvacationComponent },
  { path: 'addVacation', component: AddvacationComponent },
  { path: 'editVacation', component: EditvacationComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
