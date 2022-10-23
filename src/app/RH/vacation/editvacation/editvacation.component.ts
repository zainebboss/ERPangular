import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../Model/User';
import { Vacation } from '../../Model/Vacation';
import { VacationService } from '../../service/vacation.service';

@Component({
  selector: 'app-editvacation',
  templateUrl: './editvacation.component.html',
  styleUrls: ['./editvacation.component.css']
})
export class EditvacationComponent implements OnInit {
  

  vacation!: Vacation;
 Users!:User[];
 
 VacationForm!:FormGroup;
 submitted: boolean = false;
  constructor(
    private vacationService: VacationService,private formBuilder: FormBuilder,
    private router: Router,private activatedRoute: ActivatedRoute
  ) {
    this.VacationForm = this.formBuilder.group({
      
      end: ['', Validators.required],
      start: ['', Validators.required],


    });
  }
  get form() {
    return this.VacationForm?.controls;
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      params => {   
        if(params['id'] ){
          this.vacationService.getVacationById(params['id'] ).subscribe(
            (result) => {
              this.vacation=result
              this.VacationForm.setValue({
               
                end:  this.vacation.end,
                start:  this.vacation.start,
                
             });
            },
            (error) => {
              console.log(error);
            }
          );
        }
        else  this.router.navigate(['showvacation']);
      })
     
    ;
  }

  onSubmit() {
    this.submitted = true;
    let data = this.VacationForm.value
    if (this.VacationForm.status === 'VALID') {
      data.id=this.vacation.id
      this.vacationService.UpdateVacation(data).subscribe(
        result => {
          console.log(result);
          this.VacationForm.reset();
          this.submitted = false;
          this.router.navigate(['showvacation']);
        },
      );
    } else if (this.VacationForm.status === 'INVALID') {
      this.VacationForm.markAllAsTouched()
    }




  }
}
