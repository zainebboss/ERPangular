import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from 'src/app/Auth/_services/TokenStorageService.service';
import { User } from '../../Model/User';
import { Vacation } from '../../Model/Vacation';
import { VacationService } from '../../service/vacation.service';

@Component({
  selector: 'app-addvacation',
  templateUrl: './addvacation.component.html',
  styleUrls: ['./addvacation.component.css']
})
export class AddvacationComponent implements OnInit {

  vacatios!: Vacation[];
  user!: User;
  VacationForm!: FormGroup;
  submitted: boolean = false;
  token: string | null=null;
  userConnected: User=new User();



  constructor(public tokenStorageService: TokenStorageServiceService,private service: VacationService, private router: Router, private formBuilder: FormBuilder) {

   
    this.VacationForm = this.formBuilder.group({
      end: ['', Validators.required],
      start: ['', Validators.required],
      user: [''],


    });
    

  }
  
  get form() {
    return this.VacationForm?.controls;
  }

  ngOnInit(): void {

    this.token = this.tokenStorageService.getToken();
    this.userConnected = this.tokenStorageService.getUser();
    this.VacationForm.setValue({
      user: this.userConnected.id,
    })
  }

  onSubmit() {
    
    this.submitted = true;
    let data = this.VacationForm.value
    
    //data['user'] = this.userConnected;

    if (this.VacationForm.status === 'VALID') {
      console.log(data);
      this.service.addVacation(data.end,data.start,this.userConnected.id).subscribe(
        result => {
          console.log(result);
          this.VacationForm.reset();
          this.submitted = false;
          this.router.navigate(['showvacation']);
        },
        
      );
      console.log(data);
    } else if (this.VacationForm.status === 'INVALID') {
      console.log(this.VacationForm.getError)
      this.VacationForm.markAllAsTouched()
      console.log("Vacation2");
    }
    




  }
  back() {
    this.router.navigateByUrl('/showabdence');
  }

}
