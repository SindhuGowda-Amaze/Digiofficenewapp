import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../../dgoffice-service.service';
@Component({
  selector: 'app-company-profile-dashboard',
  templateUrl: './company-profile-dashboard.component.html',
  styleUrls: ['./company-profile-dashboard.component.css']
})
export class CompanyProfileDashboardComponent implements OnInit {

  constructor(  private DgofficeServiceService:DgofficeServiceService) { }

  ngOnInit(): void {
    this.GetCompanyProfile();
  }

  CompanyProfilelist:any
  public GetCompanyProfile() {
    this.DgofficeServiceService.GetCompanyProfile().subscribe(data=>{
      debugger
      this.CompanyProfilelist=data ;
     })
  }

  CompanyProfilelist1:any
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
      OverTime_Comeptition_OTRates : any;
		  RestDays : any;
		  thirteen_Month_Compuatation_Type : any;
		  thirteen_Month_Deduct_Absent : any;
		  thirteen_Month_Deduct_Late : any;
		  FinalPay_Deduct_Absent : any;
		  FinalPay_Deduct_Late : any;
		  Final_Pay_13th_Month : any;
		  NetPay_Threshold : any;
		  SSS_Coverage : any;
		  PhilHealth_Coverage : any;
		  HDMF : any;
		  HDMF_Employer_Contribution : any;
		  PayRoll_Calender : any;
		  Tax_Table : any;
		  Tax_Table_Starts_on : any;
		  Tax_Table_Including_13thmonth : any;
		  Non_Tax_Essential_Sealing : any;
		  Deminimis_Exemption : any;
      OverTime_Comeptition_Optional: any;
      Late_Deduction : any;
      Absent_Deduction : any;
      thirteen_Month_Optional : any;
      SSS_Optional : any;
      PhilHealth_Optional : any;
      

 public  getcompany(id:any){
  this.DgofficeServiceService.GetCompanyProfile().subscribe(data=>{
    debugger
    this.CompanyProfilelist1=data.filter(x=>x.id==id);
    this.RDO==this.CompanyProfilelist1[0].rdo
    this.Email==this.CompanyProfilelist1[0].Email
    this.Phone==this.CompanyProfilelist1[0].Phone
    this.Password==this.CompanyProfilelist1[0].Password
    this.Fax==this.CompanyProfilelist1[0].Fax
    this.Tin==this.CompanyProfilelist1[0].Tin
    this.SSN_No==this.CompanyProfilelist1[0].SSN_No
    this.PhilHealthNumber==this.CompanyProfilelist1[0].PhilHealthNumber
    this.HDMFNumber==this.CompanyProfilelist1[0].HDMFNumber
    this.Admin_AuthorisedPerson==this.CompanyProfilelist1[0].Admin_AuthorisedPerson
    this.Admin_PositionTitle==this.CompanyProfilelist1[0].Admin_PositionTitle
    this.HR_AuthorisedPerson==this.CompanyProfilelist1[0].HR_AuthorisedPerson
    this.HR_PositionTitle==this.CompanyProfilelist1[0].HR_PositionTitle
    this.Finance_AuthorisedPerson==this.CompanyProfilelist1[0].Finance_AuthorisedPerson
    this.Finance_PositionTitle==this.CompanyProfilelist1[0].Finance_PositionTitle
    this.E_Signatory==this.CompanyProfilelist1[0].E_Signatory
    this.Work_Days_Per_Year==this.CompanyProfilelist1[0].Work_Days_Per_Year
    this.Work_Days_Per_Day==this.CompanyProfilelist1[0].Work_Days_Per_Day
    this.Work_Months_Per_Year==this.CompanyProfilelist1[0].Work_Months_Per_Year
    this.Work_hour_Start==this.CompanyProfilelist1[0].Work_hour_Start
    this.Work_hour_End==this.CompanyProfilelist1[0].Work_hour_End
    this.Break_Hours==this.CompanyProfilelist1[0].Break_Hours
    this.Periods_Per_Month==this.CompanyProfilelist1[0].Periods_Per_Month
    this.Absent_Deduction==this.CompanyProfilelist1[0].Absent_Deduction
    this.Late_Deduction==this.CompanyProfilelist1[0].Late_Deduction
    this.OverTime_Comeptition_Optional==this.CompanyProfilelist1[0].OverTime_Comeptition_Optional
    this.OverTime_Comeptition_OTRates==this.CompanyProfilelist1[0].OverTime_Comeptition_OTRates
    this.RestDays==this.CompanyProfilelist1[0].RestDays
    this.thirteen_Month_Compuatation_Type==this.CompanyProfilelist1[0].thirteen_Month_Compuatation_Type
    this.thirteen_Month_Deduct_Absent==this.CompanyProfilelist1[0].thirteen_Month_Deduct_Absent
    this.thirteen_Month_Deduct_Late==this.CompanyProfilelist1[0].thirteen_Month_Deduct_Late
    this.thirteen_Month_Optional==this.CompanyProfilelist1[0].thirteen_Month_Optional
    this.FinalPay_Deduct_Absent==this.CompanyProfilelist1[0].FinalPay_Deduct_Absent
    this.FinalPay_Deduct_Late==this.CompanyProfilelist1[0].FinalPay_Deduct_Late
    this.Final_Pay_13th_Month==this.CompanyProfilelist1[0].Final_Pay_13th_Month
    this.NetPay_Threshold==this.CompanyProfilelist1[0].NetPay_Threshold
    this.SSS_Coverage==this.CompanyProfilelist1[0].SSS_Coverage
    this.SSS_Optional==this.CompanyProfilelist1[0].SSS_Optional
    this.PhilHealth_Coverage==this.CompanyProfilelist1[0].PhilHealth_Coverage
    this.PhilHealth_Optional==this.CompanyProfilelist1[0].PhilHealth_Optional
    this.HDMF==this.CompanyProfilelist1[0].HDMF
    this.HDMF_Employer_Contribution==this.CompanyProfilelist1[0].HDMF_Employer_Contribution
    this.PayRoll_Calender==this.CompanyProfilelist1[0].PayRoll_Calender
    this.Tax_Table==this.CompanyProfilelist1[0].Tax_Table
    this.Tax_Table_Starts_on==this.CompanyProfilelist1[0].Tax_Table_Starts_on
    this.Tax_Table_Including_13thmonth==this.CompanyProfilelist1[0].Tax_Table_Including_13thmonth
    this.Non_Tax_Essential_Sealing==this.CompanyProfilelist1[0].Non_Tax_Essential_Sealing
    this.Deminimis_Exemption==this.CompanyProfilelist1[0].Deminimis_Exemption
 }
  )}
}
