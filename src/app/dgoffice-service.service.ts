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


    public GetOTRates() {
    debugger
    let APIURL = this.baseURL+"Master/GetOTRates";
    return this.http.get<any[]>(APIURL);
  }


  public GetCompanyProfile() {
    debugger
    let APIURL = this.baseURL+"Master/GetCompanyProfile";
    return this.http.get<any[]>(APIURL);
  }

  public InsertCompany_Profile(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertCompany_Profile";
    return this.http.post<any[]>(APIURL,json);
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


  public GetPhilHealth() {
    debugger
    let APIURL = this.baseURL+"Master/GetPhilHealth";
    return this.http.get<any[]>(APIURL);
  }

  public InsertPhilHealth(json:any){
    let APIURL=this.baseURL+"Master/InsertPhilHealth";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdatePhilHealth(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdatePhilHealth";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeletePhilHealth(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeletePhilHealth?ID=" +ID);
  }



  public AttachmentsUpload(files: any) {
    debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    debugger
    let APIURL = this.baseURL + "Master/UploadImages/";
    return this.http.post(APIURL, formdata);
  }
  

  
  public GetBanks() {
    debugger
    let APIURL = this.baseURL+"Master/GetBanks";
    return this.http.get<any[]>(APIURL);
  }

  public InsertBanks(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertBanks";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateBanks(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateBanks";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteBanks(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeleteBanks?ID=" +ID);
  }

  public GetPayGroup() {
    debugger
    let APIURL = this.baseURL+"Master/GetPayGroup";
    return this.http.get<any[]>(APIURL);
  }

  public InsertPayGroup(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertPayGroup";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdatePayGroup(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdatePayGroup";
    return this.http.post<any[]>(APIURL, json);
  }
  

  public DeletePayGroup(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeletePayGroup?ID=" +ID);
  }



  public DeleteCompanyAdjustment(ID:any) {
    debugger
    let APIURL = this.baseURL+"Master/DeleteCompanyAdjustment?ID="+ID;
    return this.http.get<any[]>(APIURL);
  }
  

  public GetSSS() {
    debugger
    let APIURL = this.baseURL+"Master/GetSSS";
    return this.http.get<any[]>(APIURL);
  }

  public InsertSSS(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertSSS";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateSSS(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateBanks";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteSSS(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeleteSSS?ID=" +ID);
  }



  public GetGovernmentRecords() {
    debugger
    let APIURL = this.baseURL+"Master/GetGovernmentRecords";
    return this.http.get<any[]>(APIURL);
  }

  public InsertGovernmentRecords(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertGovernmentRecords";
    return this.http.post<any[]>(APIURL, json);
  }
  public UpdateCostcenter(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateCostcenter";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateDepartment(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateDepartment";
    return this.http.post<any[]>(APIURL, json);
  }
  
  
  public GetTaxtable() {
    debugger
    let APIURL = this.baseURL+"Master/GetTaxtable";
    return this.http.get<any[]>(APIURL);
  }


  public InsertEmployeeInformation(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertEmployeeInformation";
    return this.http.post<any[]>(APIURL, json);
  }


  
  public GetEmployeeInformation() {
    debugger
    let APIURL = this.baseURL+"Master/GetEmployeeInformation";
    return this.http.get<any[]>(APIURL);
  }


  public UpdateEmployeeInformation(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateEmployeeInformation";
    return this.http.post<any[]>(APIURL, json);
  }
  


  public GetPayroll() {
    debugger
    let APIURL = this.baseURL+"Master/GetPayroll";
    return this.http.get<any[]>(APIURL);
  }
   
  public InsertPayroll(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertPayroll";
    return this.http.post<any[]>(APIURL, json);
  }
  
  public UpdateCompanyProfile(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateCompanyProfile";
    return this.http.post<any[]>(APIURL, json);
  }

}
