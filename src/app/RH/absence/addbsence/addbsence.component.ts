import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageServiceService } from 'src/app/Auth/_services/TokenStorageService.service';
import { Absence } from '../../Model/Absence';
import { User } from '../../Model/User';
import { AbsenceService } from '../../service/absence.service';

@Component({
  selector: 'app-addbsence',
  templateUrl: './addbsence.component.html',
  styleUrls: ['./addbsence.component.css'],
 
})
export class AddbsenceComponent implements OnInit {

  absences!: Absence[];
  user!: User;
  AbsenceForm!: FormGroup;
  submitted: boolean = false;
  token: string | null=null;
  userConnected: User=new User();



  constructor(public tokenStorageService: TokenStorageServiceService,private service: AbsenceService, private router: Router, private formBuilder: FormBuilder) {

   
    this.AbsenceForm = this.formBuilder.group({
      date: ['', Validators.required],
      user: [''],


    });
    

  }
  
  get form() {
    return this.AbsenceForm?.controls;
  }

  ngOnInit(): void {

    this.token = this.tokenStorageService.getToken();
    this.userConnected = this.tokenStorageService.getUser();
    this.AbsenceForm.setValue({
      user: this.userConnected.id,
    })
  }

  onSubmit() {
     console.log("absence");
    this.submitted = true;
    let data = this.AbsenceForm.value
    
    //data['user'] = this.userConnected;

    if (this.AbsenceForm.status === 'VALID') {
      console.log(data);
      this.service.addAbsence(data.date,this.userConnected.id).subscribe(
        result => {
          console.log(result);
          this.AbsenceForm.reset();
          this.submitted = false;
          this.router.navigate(['showabsence']);
        },
        
      );
      console.log(data);
    } else if (this.AbsenceForm.status === 'INVALID') {
      console.log(this.AbsenceForm.getError)
      this.AbsenceForm.markAllAsTouched()
      console.log("absence2");
    }
    




  }
  back() {
    this.router.navigateByUrl('/showabdence');
  }

}
