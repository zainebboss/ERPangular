import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacation } from '../Model/Vacation';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  
    baseurl = environment.url;
    constructor(private http: HttpClient) { }
    getVacations(): Observable <Vacation[]> {
      return this.http.get<Vacation[]>(this.baseurl + 'vacations/all');
    }
    
    getVacationById(id: any): Observable <Vacation> {
      return this.http.get<Vacation>(this.baseurl + 'vacations/retrieve/' + id);
    }
  
    addVacation(end: string,start: string,userId :number): Observable <any>  {
      const body = { "end":end,"start":start, "user": {"id":userId} };
      return this.http
          .post(this.baseurl + 'vacations/add',  body , { responseType: 'json' })
          .pipe();
    }
    
  
    deleteVacation(id: any) {
      return this.http.delete(this.baseurl + 'vacations/remove/' + id);
    }
    UpdateVacation(data: Vacation): Observable<Vacation> {
      return this.http.put<Vacation>(
        this.baseurl + 'vacations/modify' ,data);
    }
  
}
