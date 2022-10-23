import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absence } from '../Model/Absence';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  baseurl = environment.url;
  constructor(private http: HttpClient) { }
  getAbsences(): Observable <Absence[]> {
    return this.http.get<Absence[]>(this.baseurl + 'absenses/all');
  }
  
  getAbsenceById(id: any): Observable <Absence> {
    return this.http.get<Absence>(this.baseurl + 'absenses/retrieve/' + id);
  }

  addAbsence(date: string,userId :number): Observable <any>  {
    const body = { "date":date, "user": {"id":userId} };
    return this.http
        .post(this.baseurl + 'absenses/add',  body , { responseType: 'json' })
        .pipe();
  }
  

  deleteAbsence(id: any) {
    return this.http.delete(this.baseurl + 'absenses/remove/' + id);
  }
  UpdateAbsence(data: Absence): Observable<Absence> {
    return this.http.put<Absence>(
      this.baseurl + 'absenses/modify' ,data);
  }
}
