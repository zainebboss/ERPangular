import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Vacation } from '../../Model/Vacation';
import { ExcelService } from '../../service/excel.service';
import { VacationService } from '../../service/vacation.service';

@Component({
  selector: 'app-showvacation',
  templateUrl: './showvacation.component.html',
  styleUrls: ['./showvacation.component.css']
})
export class ShowvacationComponent implements OnInit {

  constructor(private excelService: ExcelService,private vacationService: VacationService, private router: Router) { }
  vacations!: Vacation[];
  public VacationsFiltered$: Vacation[] =[]
  search:string=''

  p: number = 1;
  nbItems: number = 2;
  ngOnInit(): void {

   
    this.ShowAllVacation();
    
  }
  
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.VacationsFiltered$, 'absenses');
   
  }

  searchVacations(){
    this.p=1
    this.VacationsFiltered$=[]
    this.VacationsFiltered$ = this.vacations?.filter(vacation => { 
      
      return  ( 
        
        vacation.start
      );
      
   });
  }


  ShowAllVacation() {
    this.vacationService.getVacations().subscribe(
      (result) => {
        this.vacations = result;
        this.VacationsFiltered$= result;


      },
      (error) => {
        console.log(error);
      }
    );
  }
  Delete(id: number) {
    this.vacationService.deleteVacation(id).subscribe(
      (result) => {
        console.log(result);
        this.ShowAllVacation();

      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateVacation(id: number) {
    let navigationExtras: NavigationExtras = { 
      queryParams: { 
        "id": id, 
      } 
    };
    this.router.navigate(["editVacation"], navigationExtras);
  }
  addVacation() {
    this.router.navigate(['addVacation']);
  }

}

