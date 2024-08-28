import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servein } from 'src/app/domain/servein';

@Injectable({
  providedIn: 'root'
})
export class ServeclassService {

  private purls="http://172.17.13.147:8080/applicationStatistics";
constructor(private http:HttpClient){}
 
    geturllist():Observable<Servein>{
      return this.http.get<Servein>(this.purls);
    }
}
