import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from 'src/app/dgoffice-service.service';
@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {
  result: any;
  count: any;
      Company_logo : any;
		  Company_Name : any;
		  Nature_Of_Business : any;
		  Address1 : any;
		  Address2: any;
		  Zipcode : any;
		  RDO : any;
		  Email : any;
		  Phone : any;
		  Password : any;
		  Fax : any;
		  Tin : any;
		  SSN_No : any;
		  PhilHealthNumber : any;
		  HDMFNumber : any;
		  Admin_AuthorisedPerson : any;
		  Admin_PositionTitle : any;
		  HR_AuthorisedPerson : any;
		  HR_PositionTitle : any;
		  Finance_AuthorisedPerson : any;
		  Finance_PositionTitle : any;
		  E_Signatory : any;
		  Work_Days_Per_Year : any;
		  Work_Days_Per_Day : any;
		  Work_Months_Per_Year : any;
		  Work_hour_Start : any;
		  Work_hour_End : any;
		  Break_Hours : any;
		  Periods_Per_Month : any;
		  Absent_Deduction : any;
		  Late_Deduction : any;
		
		  OverTime_Comeptition_OTRates : any;
		  RestDays : any;
		  thirteen_Month_Compuatation_Type : any;
		  thirteen_Month_Deduct_Absent : any;
		  thirteen_Month_Deduct_Late : any;
		  thirteen_Month_Optional : any;
		  FinalPay_Deduct_Absent : any;
		  FinalPay_Deduct_Late : any;
		  Final_Pay_13th_Month : any;
		  NetPay_Threshold : any;
		  SSS_Coverage : any;
		  SSS_Optional : any;
		  PhilHealth_Coverage : any;
		  PhilHealth_Optional : any;
		  HDMS : any;
		  HDMF_Employer_Contribution : any;
		  PayRoll_Calender : any;
		  Tax_Table : any;
		  Tax_Table_Starts_on : any;
		  Tax_Table_Including_13thmonth : any;
		  Non_Tax_Essential_Sealing : any;
		  Deminimis_Exemption : any;


  constructor(private DgofficeServiceService: DgofficeServiceService) { }

  ngOnInit(): void {
    this.GetCompanyProfile();
  }
  GetCompanyProfile() {
    this.DgofficeServiceService.GetCompanyProfile().subscribe(
      data => {
        debugger
        this.result = data;
        this.count = this.result.length;
      }
    )
  }

  OverTime_Comeptition_Optional_BasicSalary123:any
 

  formData:any

  formData_OverTime_Comeptition_Optional_Deminimis:any
 OverTime_Comeptition_Optional: any
 OverTime_Comeptition_Optional_BasicSalary:any
 OverTime_Comeptition_Optional_Deminimis:any
 OverTime_Comeptition_Optional_ECOLA:any
 OverTime_Comeptition_Optional_Allowance:any
 OverTime_Comeptition_Optional_Reimbursement:any

 GetOverTime_Comeptition_Optional_BasicSalary(event:any){
	debugger;
  this.OverTime_Comeptition_Optional_BasicSalary=event.target.value
}

GetOverTime_Comeptition_Optional_Allowance(event:any)
{
	debugger;
	this.OverTime_Comeptition_Optional_Allowance=event.target.value
}



GetOverTime_Comeptition_Optional_Deminimis(event:any)
{
	debugger;
	this.OverTime_Comeptition_Optional_Deminimis=event.target.value
}



GetOverTime_Comeptition_Optional_ECOLA(event:any)
{
	debugger;
	this.OverTime_Comeptition_Optional_ECOLA=event.target.value
}


GetOverTime_Comeptition_Optional_Reimbursement(event:any)
{
	debugger;
	this.OverTime_Comeptition_Optional_Reimbursement=event.target.value
}




 
  onSave(){
    debugger
	this.OverTime_Comeptition_Optional=this.OverTime_Comeptition_Optional_BasicSalary  + ',' + this.OverTime_Comeptition_Optional_Deminimis  + ',' + this.OverTime_Comeptition_Optional_ECOLA + ',' + this.OverTime_Comeptition_Optional_Allowance + ',' +this.OverTime_Comeptition_Optional_Reimbursement
    var json = {
		
         "company_logo": "Company1 logo",
		  "company_Name": this.Company_Name,
		  "nature_Of_Business": this.Nature_Of_Business,
		  "address1": this.Address1,
		  "address2": this.Address2,
		  "zipcode": this.Zipcode, 
		  "rdo": this.RDO, 
		  "email": this.Email, 
		  "phone": this.Phone,
		  "password": this.Password, 
		  "fax": this.Fax, 
		  "tin": this.Tin, 
          "ssN_No": this.SSN_No ,
		  "philHealthNumber": this.PhilHealthNumber, 
		  "hdmfNumber": this.HDMFNumber, 
		  "admin_AuthorisedPerson": this.Admin_AuthorisedPerson, 
		  "admin_PositionTitle": this.Admin_PositionTitle, 
		  "hR_AuthorisedPerson": this.HR_AuthorisedPerson, 
		  "hR_PositionTitle": this.HR_PositionTitle, 
		  "finance_AuthorisedPerson": this.Finance_AuthorisedPerson,
		  "finance_PositionTitle": this.Finance_PositionTitle, 
		  "e_Signatory": "sign" ,
		  "work_Days_Per_Year": this.Work_Days_Per_Year, 
		  "work_Days_Per_Day": this.Work_Days_Per_Day, 
		  "work_Months_Per_Year": this.Work_Months_Per_Year, 
		  "work_hour_Start": this.Work_hour_Start,
		  "work_hour_End": this.Work_hour_End, 
		  "break_Hours": this.Break_Hours,
		  "periods_Per_Month": this.Periods_Per_Month,
		  "absent_Deduction": this.Absent_Deduction, 
		  "late_Deduction": this.Late_Deduction, 
		
		  "overTime_Comeptition_Optional": this.OverTime_Comeptition_Optional, 
		  "overTime_Comeptition_OTRates": this.OverTime_Comeptition_OTRates ,
		  "restDays": this.RestDays,
		  "thirteen_Month_Compuatation_Type": this.thirteen_Month_Compuatation_Type, 
		  "thirteen_Month_Deduct_Absent": this.thirteen_Month_Deduct_Absent,
		  "thirteen_Month_Deduct_Late": this.thirteen_Month_Deduct_Late, 
		  "thirteen_Month_Optional": this.thirteen_Month_Optional, 
		  "finalPay_Deduct_Absent": this.FinalPay_Deduct_Absent, 
		  "finalPay_Deduct_Late": this.FinalPay_Deduct_Late, 
		  "final_Pay_13th_Month": this.Final_Pay_13th_Month, //
		  "NetPay_Threshold": this.NetPay_Threshold, 
		  "SSS_Coverage": this.SSS_Coverage ,
		  "SSS_Optional": this.SSS_Optional ,
		  "PhilHealth_Coverage": this.PhilHealth_Coverage, 
		  "PhilHealth_Optional": this.PhilHealth_Optional, 
		  "HDMF_Employer_Contribution": this.HDMF_Employer_Contribution, 
		  "PayRoll_Calender": this.PayRoll_Calender, 
		  "Tax_Table": this.Tax_Table, 
		  "Tax_Table_Starts_on": this.Tax_Table_Starts_on, 
		  "Tax_Table_Including_13thmonth": "true", 
		  "Non_Tax_Essential_Sealing": this.Non_Tax_Essential_Sealing ,
		  "Deminimis_Exemption": this.Deminimis_Exemption 
    };
    this.DgofficeServiceService.InsertCompany_Profile(json).subscribe(
      data => {
        debugger
        let id = data;
        this.GetCompanyProfile();
      
      })
  }







  files: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
	this.uploadattachments2();
    console.log("content", this.files);
  }

  onRemove(event:any)
  {
debugger
console.log(event);
this.files.splice(this.files.indexOf(event),1);
  }

  public uploadattachments() {
    debugger
    this.DgofficeServiceService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }
  public uploadattachments2() {
    debugger
    this.DgofficeServiceService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.E_Signatory = res;
      alert("ATTACHMENT UPLOADED");
    })
  }
}


