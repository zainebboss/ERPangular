import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Absence } from '../../Model/Absence';
import { AbsenceService } from '../../service/absence.service';
import { ExcelService } from '../../service/excel.service';

@Component({
  selector: 'app-showabsence',
  templateUrl: './showabsence.component.html',
  styleUrls: ['./showabsence.component.css']
})
export class ShowabsenceComponent implements OnInit {

  constructor(private excelService: ExcelService,private absenceService: AbsenceService, private router: Router) { }
  absences!: Absence[];
  public AbsencesFiltered$: Absence[] =[]
  search:string=''

  p: number = 1;
  nbItems: number = 2;
  ngOnInit(): void {

   
    this.ShowAllAbsence();
    
  }
  
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.AbsencesFiltered$, 'absenses');
   
  }

  searchAbsences(){
    this.p=1
    this.AbsencesFiltered$=[]
    this.AbsencesFiltered$ = this.absences?.filter(absence => { 
      
      return  ( 
        
        absence.date
      );
      
   });
  }


  ShowAllAbsence() {
    this.absenceService.getAbsences().subscribe(
      (result) => {
        this.absences = result;
        this.AbsencesFiltered$= result;


      },
      (error) => {
        console.log(error);
      }
    );
  }
  Delete(id: number) {
    this.absenceService.deleteAbsence(id).subscribe(
      (result) => {
        console.log(result);
        this.ShowAllAbsence();

      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateAbsence(id: number) {
    let navigationExtras: NavigationExtras = { 
      queryParams: { 
        "id": id, 
      } 
    };
    this.router.navigate(["Absence/update"], navigationExtras);
  }
  addAbsence() {
    this.router.navigate(['addabsence']);
  }

}
