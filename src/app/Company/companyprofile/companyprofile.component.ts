import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from 'src/app/dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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

		  id:any;


  constructor(private DgofficeServiceService: DgofficeServiceService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
	this.ActivatedRoute.params.subscribe(params=>{
		debugger
	   this.id=params["id"];
	   if(this.id!=null&&this.id!=undefined){  
		this.GetCompanyProfile();
	   }
	  })

  
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


 OverTime_Comeptition_Optional: any
 OverTime_Comeptition_Optional_BasicSalary:any
 OverTime_Comeptition_Optional_Deminimis:any
 OverTime_Comeptition_Optional_ECOLA:any
 OverTime_Comeptition_Optional_Allowance:any
 OverTime_Comeptition_Optional_Reimbursement:any

 
 Late_Deduction : any
 Late_Deduction_BasicSalary:any
 Late_Deduction_Deminimis:any
 Late_Deduction_ECOLA:any
 Late_Deduction_Allowance:any
 Late_Deduction_Reimbursement:any
 Late_Deduction_bonus:any

 Absent_Deduction : any;
 Absent_Deduction_BasicSalary:any
 Absent_Deduction_Deminimis:any
 Absent_Deduction_ECOLA:any
 Absent_Deduction_Allowance:any
 Absent_Deduction_Reimbursement:any
 Absent_Deduction_bonus:any

 thirteen_Month_Optional : any;
 thirteen_Month_Optional_Basic:any
 thirteen_Month_Optional_BasicAdjustment:any
 thirteen_Month_Optional_OverTime:any
 thirteen_Month_Optional_Deminimis:any
 thirteen_Month_Optional_Bonus:any
 thirteen_Month_Optional_Commission:any
 thirteen_Month_Optional_ECOLA:any
 thirteen_Month_Optional_OtherTaxableIncome:any
 thirteen_Month_Optional_Allowance:any
 thirteen_Month_Optional_Reimbursement:any
 thirteen_Month_Optional_SalaryAdjustment:any

 SSS_Optional : any;
 SSS_Optional_BasicSalary:any
 SSS_Optional_OverTime:any
 SSS_Optional_ECOLA:any
 SSS_Optional_Deminimis:any
 SSS_Optional_Absent_late:any
 SSS_Optional_Allowance:any
 SSS_Optional_Bonuses:any
 SSS_Optional_SalaryAdjustment:any
 SSS_Optional_Reimbursement:any
 SSS_Optional_Commission:any

 PhilHealth_Optional : any;
 PhilHealth_Optional_BasicSalary:any
 PhilHealth_Optional_OverTime:any
 PhilHealth_Optional_ECOLA:any
 PhilHealth_Optional_Deminimis:any
 PhilHealth_Optional_Absent_late:any
 PhilHealth_Optional_Allowance:any
 PhilHealth_Optional_Bonuses:any
 PhilHealth_Optional_SalaryAdjustment:any
 PhilHealth_Optional_Reimbursement:any
 PhilHealth_Optional_Commission:any



 monday:any;
 tuesday:any;
 wednesday:any;
 thursday:any;
 friday:any;
 saturday:any;
 sunday:any;

 ord_ot: any;
 ord_nd: any;
 ord_nd_ot: any;
 rd: any;
 rd_ot: any;
 rd_nd: any;
 rd_nd_ot: any;
 sh: any;
 sh_ot: any;
 sh_nd: any;
 sh_nd_ot: any;
 lh: any;
 lh_ot: any;
 lh_nd: any;
 lh_nd_ot: any;
 sh_rd: any;
 sh_rd_ot: any;
 sh_rd_nd: any;
 sh_rd_nd_ot: any;
 lh_rd: any;
 lh_rd_ot: any;
 lh_rd_nd: any;
 lh_rd_nd_ot: any;
 dh: any;
 dh_ot: any;
 dh_nd: any;
 dh_nd_ot: any;
 dh_rd: any;
 dh_rd_ot: any;
 dh_rd_nd: any;
 dh_rd_nd_ot: any;

 Getord_ot(event:any){
	debugger;
	this.ord_ot=event.target.value
  }

  Getord_nd(event:any){
	debugger;
	this.ord_nd=event.target.value
  }
  Getord_nd_ot(event:any){
	debugger;
	this.ord_nd_ot=event.target.value
  }
  Getrd(event:any){
	debugger;
	this. rd=event.target.value
  }
  Getrd_ot(event:any){
	debugger;
	this.rd_ot=event.target.value
  }
  
  Getrd_nd(event:any){
	debugger;
	this.rd_nd=event.target.value
  }
  Getrd_nd_ot(event:any){
	debugger;
	this.rd_nd_ot=event.target.value
  }
  Getsh(event:any){
	debugger;
	this.sh=event.target.value
  }
  Getsh_ot(event:any){
	debugger;
	this.sh_ot=event.target.value
  }
  Getsh_nd(event:any){
	debugger;
	this.sh_nd=event.target.value
  }
  Getsh_nd_ot(event:any){
	debugger;
	this.sh_nd_ot=event.target.value
  }
  Getlh(event:any){
	debugger;
	this.lh=event.target.value
  }
  Getlh_ot(event:any){
	debugger;
	this.lh_ot=event.target.value
  }
  Getlh_nd(event:any){
	debugger;
	this.lh_nd=event.target.value
  }
  Getlh_nd_ot(event:any){
	debugger;
	this.lh_nd_ot=event.target.value
  }
  Getsh_rd(event:any){
	debugger;
	this.sh_rd=event.target.value
  }
  Getsh_rd_ot(event:any){
	debugger;
	this.sh_rd_ot=event.target.value
  }
  Getsh_rd_nd(event:any){
	debugger;
	this.sh_rd_nd=event.target.value
  }
  Getsh_rd_nd_ot(event:any){
	debugger;
	this.sh_rd_nd_ot=event.target.value
  }
  Getlh_rd(event:any){
	debugger;
	this.lh_rd=event.target.value
  }
  Getlh_rd_ot(event:any){
	debugger;
	this.lh_rd_ot=event.target.value
  }
  Getlh_rd_nd(event:any){
	debugger;
	this.lh_rd_nd=event.target.value
  }
  Getlh_rd_nd_ot(event:any){
	debugger;
	this.lh_rd_nd_ot=event.target.value
  }
  Getdh(event:any){
	debugger;
	this.dh=event.target.value
  }
  Getdh_ot(event:any){
	debugger;
	this.dh_ot=event.target.value
  }
  Getdh_nd(event:any){
	debugger;
	this.dh_nd=event.target.value
  }
  Getdh_nd_ot(event:any){
	debugger;
	this.dh_nd_ot=event.target.value
  }
  Getdh_rd(event:any){
	debugger;
	this.dh_rd=event.target.value
  }
  Getdh_rd_ot(event:any){
	debugger;
	this.dh_rd_ot=event.target.value
  }
  Getdh_rd_nd(event:any){
	debugger;
	this.dh_rd_nd=event.target.value
  }
  Getdh_rd_nd_ot(event:any){
	debugger;
	this.dh_rd_nd_ot=event.target.value
  }





 Getmonday(event:any){
	debugger;
	this.monday=event.target.value
  }
  Gettuesday(event:any){
	debugger;
	this.tuesday=event.target.value
  }
  Getwednesday(event:any){
	debugger;
	this.wednesday=event.target.value
  }
  Getthursday(event:any){
	debugger;
	this.thursday=event.target.value
  }
  Getfriday(event:any){
	debugger;
	this.friday=event.target.value
  }
  Getsaturday(event:any){
	debugger;
	this.saturday=event.target.value
  }
  Getsunday(event:any){
	debugger;
	this.sunday=event.target.value
  }



  Getthirteen_Month_Optional_Basic(event:any){
	debugger;
	this.thirteen_Month_Optional_Basic=event.target.value
  }
  Getthirteen_Month_Optional_BasicAdjustment(event:any){
	debugger;
	this.thirteen_Month_Optional_BasicAdjustment=event.target.value
  }
  Getthirteen_Month_Optional_OverTime(event:any){
	debugger;
	this.thirteen_Month_Optional_OverTime=event.target.value
  }
  Getthirteen_Month_Optional_Deminimis(event:any){
	debugger;
	this.thirteen_Month_Optional_Deminimis=event.target.value
  }
  Getthirteen_Month_Optional_Bonus(event:any){
	debugger;
	this.thirteen_Month_Optional_Bonus=event.target.value
  }
  
  Getthirteen_Month_Optional_OtherTaxableIncome(event:any){
	debugger;
	this.thirteen_Month_Optional_OtherTaxableIncome=event.target.value
  }
  Getthirteen_Month_Optional_Allowance(event:any){
	debugger;
	this.thirteen_Month_Optional_Allowance=event.target.value
  }
  Getthirteen_Month_Optional_Reimbursement(event:any){
	debugger;
	this.thirteen_Month_Optional_Reimbursement=event.target.value
  }
  Getthirteen_Month_Optional_SalaryAdjustment(event:any){
	debugger;
	this.thirteen_Month_Optional_SalaryAdjustment=event.target.value
  }

  Getthirteen_Month_Optional_Commission(event:any){
	debugger;
	this. thirteen_Month_Optional_Commission=event.target.value
  }

  Getthirteen_Month_Optional_ECOLA(event:any){
	debugger;
	this.thirteen_Month_Optional_ECOLA=event.target.value
  }

 
  GetPhilHealth_Optional_BasicSalary(event:any){
	debugger;
	this. PhilHealth_Optional_BasicSalary=event.target.value
  }
  
  GetPhilHealth_Optional_OverTime(event:any){
	debugger;
	this.PhilHealth_Optional_OverTime=event.target.value
  }
 
  
  GetPhilHealth_Optional_ECOLA(event:any){
	debugger;
	this.PhilHealth_Optional_ECOLA=event.target.value
  }
 
  
  GetPhilHealth_Optional_Deminimis(event:any){
	debugger;
	this.PhilHealth_Optional_Deminimis=event.target.value
  }
 
  
  GetPhilHealth_Optional_Absent_late(event:any){
	debugger;
	this.PhilHealth_Optional_Absent_late=event.target.value
  }
 
  
  GetPhilHealth_Optional_Allowance(event:any){
	debugger;
	this.PhilHealth_Optional_Allowance=event.target.value
  }
 
  
  GetPhilHealth_Optional_Bonuses(event:any){
	debugger;
	this.PhilHealth_Optional_Bonuses=event.target.value
  }
 
  
  GetPhilHealth_Optional_SalaryAdjustment(event:any){
	debugger;
	this.PhilHealth_Optional_SalaryAdjustment=event.target.value
  }
 
  
  GetPhilHealth_Optional_Reimbursement(event:any){
	debugger;
	this.PhilHealth_Optional_Reimbursement=event.target.value
  }
 
  
  GetPhilHealth_Optional_Commission(event:any){
	debugger;
	this.PhilHealth_Optional_Commission=event.target.value
  }

  GetSSS_Optional_BasicSalary(event:any){
	debugger;
	this.SSS_Optional_BasicSalary=event.target.value
  }
  
  GetSSS_Optional_OverTime(event:any){
	debugger;
	this.SSS_Optional_OverTime=event.target.value
  }
 
  
  GetSSS_Optional_ECOLA(event:any){
	debugger;
	this. SSS_Optional_ECOLA=event.target.value
  }
 
  
  GetSSS_Optional_Deminimis(event:any){
	debugger;
	this. SSS_Optional_Deminimis=event.target.value
  }
 
  
  GetSSS_Optional_Absent_late(event:any){
	debugger;
	this.SSS_Optional_Absent_late=event.target.value
  }
 
  
  GetSSS_Optional_Allowance(event:any){
	debugger;
	this.SSS_Optional_Allowance=event.target.value
  }
 
  
  GetSSS_Optional_Bonuses(event:any){
	debugger;
	this.SSS_Optional_Bonuses=event.target.value
  }
 
  
  GetSSS_Optional_SalaryAdjustment(event:any){
	debugger;
	this.SSS_Optional_SalaryAdjustment=event.target.value
  }
 
  
  GetSSS_Optional_Reimbursement(event:any){
	debugger;
	this.SSS_Optional_Reimbursement=event.target.value
  }
 
  
  GetSSS_Optional_Commission(event:any){
	debugger;
	this.SSS_Optional_Commission=event.target.value
  }
 
 



  GetAbsent_Deduction_BasicSalary(event:any){
	debugger;
	this.Absent_Deduction_BasicSalary=event.target.value
  }
  GetAbsent_Deduction_Deminimis(event:any){
	debugger;
	this.Absent_Deduction_Deminimis=event.target.value
  }
  GetAbsent_Deduction_ECOLA(event:any){
	debugger;
	this.Absent_Deduction_ECOLA=event.target.value
  }
  GetAbsent_Deduction_Allowance(event:any){
	debugger;
	this.Absent_Deduction_Allowance=event.target.value
  }
  GetAbsent_Deduction_Reimbursement(event:any){
	debugger;
	this.Absent_Deduction_Reimbursement=event.target.value
  }
  
  GetAbsent_Deduction_bonus(event:any){
	debugger;
	this.Absent_Deduction_bonus=event.target.value
  }

  
  GetLate_Deduction_BasicSalary(event:any){
	debugger;
	this.Late_Deduction_BasicSalary=event.target.value
  }
  GetLate_Deduction_Deminimis(event:any){
	debugger;
	this.Late_Deduction_Deminimis=event.target.value
  }
  GetLate_Deduction_ECOLA(event:any){
	debugger;
	this.Late_Deduction_ECOLA=event.target.value
  }
  GetLate_Deduction_Allowance(event:any){
	debugger;
	this.Late_Deduction_Allowance=event.target.value
  }
  GetLate_Deduction_Reimbursement(event:any){
	debugger;
	this.Late_Deduction_Reimbursement=event.target.value
  }
  
  GetLate_Deduction_bonus(event:any){
	debugger;
	this.Late_Deduction_bonus=event.target.value
  }



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
	this.RestDays=this.monday  + ',' + this.tuesday  + ',' + this.wednesday + ',' + this.thursday + ',' +this.friday + ',' +this.saturday + ',' +this.sunday
	this.OverTime_Comeptition_OTRates=this.ord_ot  + ',' + this.ord_nd  + ',' + this.ord_nd_ot + ',' + this.rd + ',' +this.rd_ot + ',' +this.rd_ot + ',' +this.rd_nd+ ',' +this.rd_nd_ot+ ',' +this.rd_nd+ ',' +this.sh+ ',' +this.sh_ot+ ',' +this.sh_nd+ ',' +this.sh_nd_ot+ ',' +this.lh+ ',' +this.lh_nd+ ',' +this.lh_nd_ot+ ',' +this.sh_rd+ ',' +this.sh_rd_ot+ ',' +this.sh_rd_nd+ ',' +this.sh_rd_nd_ot+ ',' +this.lh_rd+ ',' +this.lh_rd_ot+ ',' +this.lh_rd_nd+ ',' +this.lh_rd_nd_ot+ ',' +this.dh+ ',' +this.dh_ot+ ',' +this.dh_nd+ ',' +this.dh_nd_ot+ ',' +this.dh_rd+ ',' +this.dh_rd_ot+ ',' +this.dh_rd_nd+ ',' +this.dh_rd_nd_ot
	this.Late_Deduction=this.Late_Deduction_BasicSalary  + ',' + this.Late_Deduction_Deminimis  + ',' + this.Late_Deduction_ECOLA + ',' + this.Late_Deduction_Allowance + ',' +this.Late_Deduction_Reimbursement + ',' +this.Late_Deduction_bonus
	this.Absent_Deduction=this.Absent_Deduction_BasicSalary  + ',' + this.Absent_Deduction_Deminimis  + ',' + this.	Absent_Deduction_ECOLA+ ',' + this.Absent_Deduction_Allowance + ',' +this.Absent_Deduction_Reimbursement + ',' +this.Absent_Deduction_bonus
	this.thirteen_Month_Optional=this.thirteen_Month_Optional_Basic  + ',' + this.thirteen_Month_Optional_BasicAdjustment  + ',' + this.thirteen_Month_Optional_OverTime+ ',' + this.thirteen_Month_Optional_Deminimis + ',' +this.thirteen_Month_Optional_Bonus + ',' +this.thirteen_Month_Optional_Commission+ ',' +this.thirteen_Month_Optional_ECOLA+ ',' +this.thirteen_Month_Optional_OtherTaxableIncome+ ',' +this.thirteen_Month_Optional_Allowance+ ',' +this.thirteen_Month_Optional_Reimbursement+ ',' +this.thirteen_Month_Optional_SalaryAdjustment
    this.SSS_Optional =this.SSS_Optional_BasicSalary  + ',' + this.SSS_Optional_OverTime  + ',' + this.SSS_Optional_ECOLA  + ',' + this.SSS_Optional_Deminimis  + ',' + this.SSS_Optional_Absent_late  + ',' + this.SSS_Optional_Allowance  + ',' + this.SSS_Optional_Bonuses + ',' + this.SSS_Optional_Bonuses + ',' + this.SSS_Optional_SalaryAdjustment + ',' + this.SSS_Optional_Reimbursement + ',' + this.SSS_Optional_Commission 	
	this.PhilHealth_Optional=this.PhilHealth_Optional_BasicSalary  + ',' + this.PhilHealth_Optional_OverTime  + ',' + this.PhilHealth_Optional_ECOLA  + ',' + this.SSS_Optional_Deminimis  + ',' + this.PhilHealth_Optional_Deminimis  + ',' + this.PhilHealth_Optional_Absent_late  + ',' + this.PhilHealth_Optional_Allowance + ',' + this.PhilHealth_Optional_Bonuses + ',' + this.PhilHealth_Optional_SalaryAdjustment + ',' + this.PhilHealth_Optional_Reimbursement + ',' + this.PhilHealth_Optional_Commission 

   
   var json = {
		
         "company_Logo": this.Company_logo,
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
		  "e_Signatory": this.E_Signatory,
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
		  "HDMF": this.HDMF, 
		  "HDMF_Employer_Contribution": this.HDMF_Employer_Contribution, 
		  "PayRoll_Calender": this.PayRoll_Calender, 
		  "Tax_Table": this.Tax_Table, 
		  "Tax_Table_Starts_on": this.Tax_Table_Starts_on, 
		  "Tax_Table_Including_13thmonth": this.Tax_Table_Including_13thmonth, 
		  "Non_Tax_Essential_Sealing": this.Non_Tax_Essential_Sealing ,
		  "Deminimis_Exemption": this.Deminimis_Exemption 
    };
    this.DgofficeServiceService.InsertCompany_Profile(json).subscribe(
      data => {
        debugger
        let id = data;
		alert("Successfully saved!!")
      location.href=""
      })
  }

 

  files: File[] = [];
  files1: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
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



  Update(){
	debugger
	this.OverTime_Comeptition_Optional=this.OverTime_Comeptition_Optional_BasicSalary  + ',' + this.OverTime_Comeptition_Optional_Deminimis  + ',' + this.OverTime_Comeptition_Optional_ECOLA + ',' + this.OverTime_Comeptition_Optional_Allowance + ',' +this.OverTime_Comeptition_Optional_Reimbursement
	this.RestDays=this.monday  + ',' + this.tuesday  + ',' + this.wednesday + ',' + this.thursday + ',' +this.friday + ',' +this.saturday + ',' +this.sunday
	this.OverTime_Comeptition_OTRates=this.ord_ot  + ',' + this.ord_nd  + ',' + this.ord_nd_ot + ',' + this.rd + ',' +this.rd_ot + ',' +this.rd_ot + ',' +this.rd_nd+ ',' +this.rd_nd_ot+ ',' +this.rd_nd+ ',' +this.sh+ ',' +this.sh_ot+ ',' +this.sh_nd+ ',' +this.sh_nd_ot+ ',' +this.lh+ ',' +this.lh_nd+ ',' +this.lh_nd_ot+ ',' +this.sh_rd+ ',' +this.sh_rd_ot+ ',' +this.sh_rd_nd+ ',' +this.sh_rd_nd_ot+ ',' +this.lh_rd+ ',' +this.lh_rd_ot+ ',' +this.lh_rd_nd+ ',' +this.lh_rd_nd_ot+ ',' +this.dh+ ',' +this.dh_ot+ ',' +this.dh_nd+ ',' +this.dh_nd_ot+ ',' +this.dh_rd+ ',' +this.dh_rd_ot+ ',' +this.dh_rd_nd+ ',' +this.dh_rd_nd_ot
	this.Late_Deduction=this.Late_Deduction_BasicSalary  + ',' + this.Late_Deduction_Deminimis  + ',' + this.Late_Deduction_ECOLA + ',' + this.Late_Deduction_Allowance + ',' +this.Late_Deduction_Reimbursement + ',' +this.Late_Deduction_bonus
	this.Absent_Deduction=this.Absent_Deduction_BasicSalary  + ',' + this.Absent_Deduction_Deminimis  + ',' + this.	Absent_Deduction_ECOLA+ ',' + this.Absent_Deduction_Allowance + ',' +this.Absent_Deduction_Reimbursement + ',' +this.Absent_Deduction_bonus
	this.thirteen_Month_Optional=this.thirteen_Month_Optional_Basic  + ',' + this.thirteen_Month_Optional_BasicAdjustment  + ',' + this.thirteen_Month_Optional_OverTime+ ',' + this.thirteen_Month_Optional_Deminimis + ',' +this.thirteen_Month_Optional_Bonus + ',' +this.thirteen_Month_Optional_Commission+ ',' +this.thirteen_Month_Optional_ECOLA+ ',' +this.thirteen_Month_Optional_OtherTaxableIncome+ ',' +this.thirteen_Month_Optional_Allowance+ ',' +this.thirteen_Month_Optional_Reimbursement+ ',' +this.thirteen_Month_Optional_SalaryAdjustment
    this.SSS_Optional =this.SSS_Optional_BasicSalary  + ',' + this.SSS_Optional_OverTime  + ',' + this.SSS_Optional_ECOLA  + ',' + this.SSS_Optional_Deminimis  + ',' + this.SSS_Optional_Absent_late  + ',' + this.SSS_Optional_Allowance  + ',' + this.SSS_Optional_Bonuses + ',' + this.SSS_Optional_Bonuses + ',' + this.SSS_Optional_SalaryAdjustment + ',' + this.SSS_Optional_Reimbursement + ',' + this.SSS_Optional_Commission 	
	this.PhilHealth_Optional=this.PhilHealth_Optional_BasicSalary  + ',' + this.PhilHealth_Optional_OverTime  + ',' + this.PhilHealth_Optional_ECOLA  + ',' + this.SSS_Optional_Deminimis  + ',' + this.PhilHealth_Optional_Deminimis  + ',' + this.PhilHealth_Optional_Absent_late  + ',' + this.PhilHealth_Optional_Allowance + ',' + this.PhilHealth_Optional_Bonuses + ',' + this.PhilHealth_Optional_SalaryAdjustment + ',' + this.PhilHealth_Optional_Reimbursement + ',' + this.PhilHealth_Optional_Commission 

   
   var json = {
		
         "company_Logo": this.Company_logo,
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
		  "e_Signatory": this.E_Signatory,
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
		  "HDMF": this.HDMF, 
		  "HDMF_Employer_Contribution": this.HDMF_Employer_Contribution, 
		  "PayRoll_Calender": this.PayRoll_Calender, 
		  "Tax_Table": this.Tax_Table, 
		  "Tax_Table_Starts_on": this.Tax_Table_Starts_on, 
		  "Tax_Table_Including_13thmonth": this.Tax_Table_Including_13thmonth, 
		  "Non_Tax_Essential_Sealing": this.Non_Tax_Essential_Sealing ,
		  "Deminimis_Exemption": this.Deminimis_Exemption 
    };
  
    this.DgofficeServiceService.UpdateCompanyProfile(json).subscribe(
      data => {
      debugger
      let result = data;
      Swal.fire("Update Sucessfully");
	  location.href="/CompanyProfileDashboard";
    })
  }


  onSelect1(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files1.push(event.addedFiles[0]);
    this.uploadattachments2();
    console.log("content", this.files1);
  }


  onRemove1(event:any)
  {
debugger
console.log(event);
this.files.splice(this.files.indexOf(event),1);
  }

 
  public uploadattachments2() {
    debugger
    this.DgofficeServiceService.AttachmentsUpload(this.files1).subscribe(res => {
      debugger
      this.E_Signatory = res;
      alert("ATTACHMENT UPLOADED");
    })
  }
}


