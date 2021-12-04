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
 
  
  public DeleteDepartment(id: any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteDepartment?ID="+ id;
    return this.http.get<any[]>(APIURL);
  }

  public GetCostcenter() {
    debugger
    let APIURL = this.baseURL+"Master/GetCostcenter";
    return this.http.get<any[]>(APIURL);
  }
   
  
  public InsertCostcenter(json:any){
    let APIURL=this.baseURL+"Master/InsertCostcenter";
    return this.http.post<any[]>(APIURL,json);
  }

  public DeleteCostcenter(id: any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteCostcenter?ID="+ id;
    return this.http.get<any[]>(APIURL);
  }

 
  public InsertCompanyAdjustment(json:any){
    let APIURL=this.baseURL+"Master/InsertCompanyAdjustment";
    return this.http.post<any[]>(APIURL,json);
  }

   
  public GetCompanyAdjustment() {
    debugger
    let APIURL = this.baseURL+"Master/GetCompanyAdjustment ";
    return this.http.get<any[]>(APIURL);
  }

  public InsertPhilHealth(json:any){
    let APIURL=this.baseURL+"Master/InsertPhilHealth";
    return this.http.post<any[]>(APIURL,json);
  }

  public GetPhilHealth() {
    debugger
    let APIURL = this.baseURL+"Master/GetPhilHealth";
    return this.http.get<any[]>(APIURL);
  }



  
}
