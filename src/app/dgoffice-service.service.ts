import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DgofficeServiceService {
  public baseURL = "http://localhost:4199/";

  constructor(private http: HttpClient) { }

  public GetDepartment() {
    debugger
    let APIURL = this.baseURL+"Master/GetDepartment";
    return this.http.get<any[]>(APIURL);
  }

  public InsertDepartment(json:any){
    let APIURL=this.baseURL+"Master/InsertDepartment";
    return this.http.post<any[]>(APIURL,json);
  }

  
}
