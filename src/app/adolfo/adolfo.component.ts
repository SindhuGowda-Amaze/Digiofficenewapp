import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DgofficeServiceService } from '../dgoffice-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adolfo',
  templateUrl: './adolfo.component.html',
  styleUrls: ['./adolfo.component.css']
})
export class AdolfoComponent implements OnInit {

  constructor(private DgofficeService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
  Departmentlist:any
  id:any
  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){  
       this.GetEmployeeInformation();

     }
    })


    this.GetBanks()
  }
  result:any
  GetEmployeeInformation()
  {
  this.DgofficeService.GetEmployeeInformation().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
  this.EmployeeID=this.result[0].employeeID
  this.LastName=this.result[0].lastName
  this.FirstName=this.result[0].firstName
  this.MiddleName=this.result[0].middleName
  this.Gender=this.result[0].gender
  this.DOB=this.result[0].doB
  this.CivilStatus=this.result[0].civilStatus
  this.ContactNo=this.result[0].contactNo
  this.HomeAddress=this.result[0].homeAddress
  this.Zipcode=this.result[0].zipcode
  this.Email=this.result[0].email
  this.Username=this.result[0].username
  this.Password=this.result[0].password
  this.LockUser=this.result[0].lockUser
  this.TaxStatus=this.result[0].taxStatus
  this.MinimumWagesEarned=this.result[0].minimumWagesEarned
  this.COLA=this.result[0].cola
  this.WorkdaysPerYear=this.result[0].workdaysPerYear
  this.BasicSalary=this.result[0].basicSalary
  this.Deminimis=this.result[0].deminimis
  this.OT_ComputationTable=this.result[0].oT_ComputationTable
  this.SSS_Contribution=this.result[0].ssS_Contribution
  this.PhilHealth_Contribution=this.result[0].philHealth_Contribution
  this.HDMF_Contribution=this.result[0].hdmF_Contribution
  this.Additional_HDMF_Contibution=this.result[0].additional_HDMF_Contibution
  this.JobTitle=this.result[0].jobTitle
  this.Department=this.result[0].department
  this.CostCenter=this.result[0].costCenter
  this.HireDate=this.result[0].hireDate
  this.Employment_Status=this.result[0].employment_Status
  this.StatusDate=this.result[0].statusDate
  this.Work_Hours_Per_Day=this.result[0].work_Hours_Per_Day
  this.Pay_Group=this.result[0].pay_Group
  this.ROHQ=this.result[0].rohq
  this.Consultant=this.result[0].consultant
  this.Consultant_Tax=this.result[0].consultant_Tax
  this.Consultant_TaxNum=this.result[0].consultant_TaxNum
  this.Tin=this.result[0].tin
  this.RDO=this.result[0].rdo
  this.PhilHealth_No=this.result[0].philHealth_No
  this.SSS_No=this.result[0].ssS_No
  this.HDMF_No=this.result[0].hdmF_No
  this.SL=this.result[0].sl
  this.VL=this.result[0].vl
  this.LeaveCredit=this.result[0].leaveCredit
  this.Dependent1=this.result[0].dependent1
  this.Dependent1_DOB=this.result[0].dependent1_DOB
  this.Dependent2=this.result[0].dependent2
  this.Dependent2_DOB=this.result[0].dependent2_DOB
  this.Dependent3=this.result[0].dependent3
  this.Dependent3_DOB=this.result[0].dependent3_DOB
  this.Dependent4=this.result[0].dependent4
  this.Dependent4_DOB=this.result[0].dependent4_DOB
  this.Bank=this.result[0].bank
  this.Bank_AccountType=this.result[0].bank_AccountType
  this.Bank_AccountNo=this.result[0].bank_AccountNo
  this.HasPreviousEmployment=this.result[0].hasPreviousEmployment
  this.NonTax_13thMonth=this.result[0].nonTax_13thMonth
  this.NonTax_OtherBonus=this.result[0].nonTax_OtherBonus
  this.NonTax_Salaries=this.result[0].nonTax_Salaries
  this.ThirteenthMonth=this.result[0].thirteenthMonth
  this.OtherBonus=this.result[0].otherBonus
  this.TaxableGross=this.result[0].taxableGross
  this.Tax_Withheld=this.result[0].tax_Withheld
  this.GovernmentDeductions=this.result[0].governmentDeductions
  this.PreviousEmployment_Deminimis=this.result[0].previousEmployment_Deminimis
  this.TaxableCompensation=this.result[0].taxableCompensation
  this.MonetizedLeave=this.result[0].monetizedLeave   
    })
  }  




  public GetBanks() {
    this.DgofficeService.GetBanks().subscribe(data=>{
      debugger
      this.Departmentlist=data ;
     })
  }



  EmployeeID:any
  LastName:any
  FirstName:any
  MiddleName:any
  Gender:any
  DOB:any
  CivilStatus:any
  ContactNo:any
  HomeAddress:any
  Zipcode:any
  Email:any
  Username:any
  Password:any
  LockUser:any
  TaxStatus:any
  MinimumWagesEarned:any
  COLA:any
  WorkdaysPerYear:any
  BasicSalary:any
  Deminimis:any
  OT_ComputationTable:any
  SSS_Contribution:any
  PhilHealth_Contribution:any
  HDMF_Contribution:any
  Additional_HDMF_Contibution:any
  JobTitle:any
  Department:any
  CostCenter:any
  HireDate:any
  Employment_Status:any
  StatusDate:any
  Work_Hours_Per_Day:any
  Pay_Group:any
  ROHQ:any
  Consultant:any
  Consultant_Tax:any
  Consultant_TaxNum:any
  Tin:any
  RDO:any
  PhilHealth_No:any
  SSS_No:any
  HDMF_No:any
  SL:any
  VL:any
  LeaveCredit:any
  Dependent1:any
  Dependent1_DOB:any
  Dependent2:any
  Dependent2_DOB:any
  Dependent3:any
  Dependent3_DOB:any
  Dependent4:any
  Dependent4_DOB:any
  Bank:any
  Bank_AccountType:any
  Bank_AccountNo:any
  HasPreviousEmployment:any
  NonTax_13thMonth:any
  NonTax_OtherBonus:any
  NonTax_Salaries:any
  ThirteenthMonth:any
  OtherBonus:any
  TaxableGross:any
  Tax_Withheld:any
  GovernmentDeductions:any
  PreviousEmployment_Deminimis:any
  TaxableCompensation:any
  MonetizedLeave:any



  OnSave(){
    var json = {
      'EmployeeID' : this.EmployeeID,

      'LastName' : this.LastName,

      'FirstName' : this.FirstName,

      'MiddleName' : this.MiddleName,

      'Gender' : this.Gender,

      'DOB' : this.DOB,

      'CivilStatus' : this.CivilStatus,

      'ContactNo' : this.ContactNo,

      'HomeAddress' : this.HomeAddress,

      'Zipcode' : this.Zipcode,

      'Email' : this.Email,

      'Username' : this.Username,

      'Password' : this.Password,

      'LockUser' : this.LockUser,

      'TaxStatus' : this.TaxStatus,

      'MinimumWagesEarned' : this.MinimumWagesEarned,

      'COLA' : this.COLA,

      'WorkdaysPerYear' : this.WorkdaysPerYear,

      'BasicSalary' : this.BasicSalary,

      'Deminimis' : this.Deminimis,

      'OT_ComputationTable' : this.OT_ComputationTable,

      'SSS_Contribution' : this.SSS_Contribution,

      'PhilHealth_Contribution' : this.PhilHealth_Contribution,

      'HDMF_Contribution' : this.HDMF_Contribution,

      'Additional_HDMF_Contibution' : this.Additional_HDMF_Contibution,

      'JobTitle' : this.JobTitle,

      'Department' : this.Department,

      'CostCenter' : this.CostCenter,

      'HireDate' : this.HireDate,

      'Employment_Status' : this.Employment_Status,

      'StatusDate' : this.StatusDate,

      'Work_Hours_Per_Day' : this.Work_Hours_Per_Day,

      'Pay_Group' : this.Pay_Group,

      'ROHQ' : this.ROHQ,

      'Consultant' : this.Consultant,

      'Consultant_Tax' : this.Consultant_Tax,

      'Consultant_TaxNum' : this.Consultant_TaxNum,

      'Tin' : this.Tin,

      'RDO' : this.RDO,

      'PhilHealth_No' : this.PhilHealth_No,

      'SSS_No' : this.SSS_No,

      'HDMF_No' : this.HDMF_No,

      'SL' : this.SL,

      'VL' : this.VL,

      'LeaveCredit' : this.LeaveCredit,

      'Dependent1' : this.Dependent1,

      'Dependent1_DOB' : this.Dependent1_DOB,

      'Dependent2' : this.Dependent2,

      'Dependent2_DOB' : this.Dependent2_DOB,

      'Dependent3' : this.Dependent3,

      'Dependent3_DOB' : this.Dependent3_DOB,

      'Dependent4' : this.Dependent4,

      'Dependent4_DOB' : this.Dependent4_DOB,

      'Bank' : this.Bank,

      'Bank_AccountType' : this.Bank_AccountType,

      'Bank_AccountNo' : this.Bank_AccountNo,

      'HasPreviousEmployment' : this.HasPreviousEmployment,

      'NonTax_13thMonth' : this.NonTax_13thMonth,

      'NonTax_OtherBonus' : this.NonTax_OtherBonus,

      'NonTax_Salaries' : this.NonTax_Salaries,

      'ThirteenthMonth' : this.ThirteenthMonth,

      'OtherBonus' : this.OtherBonus,

      'TaxableGross' : this.TaxableGross,

      'Tax_Withheld' : this.Tax_Withheld,

      'GovernmentDeductions' : this.GovernmentDeductions,

      'PreviousEmployment_Deminimis' : this.PreviousEmployment_Deminimis,

      'TaxableCompensation' : this.TaxableCompensation,

         'MonetizedLeave' : this.MonetizedLeave
    }
    this.DgofficeService.InsertEmployeeInformation(json).subscribe(
      data => {
        debugger
        let id = data;
		alert("Successfully saved!!")
       
      
      })

    
  }

  OnUpdate(){
    var json = {

      'ID':this.id,

      'EmployeeID' : this.EmployeeID,

      'LastName' : this.LastName,

      'FirstName' : this.FirstName,

      'MiddleName' : this.MiddleName,

      'Gender' : this.Gender,

      'DOB' : this.DOB,

      'CivilStatus' : this.CivilStatus,

      'ContactNo' : this.ContactNo,

      'HomeAddress' : this.HomeAddress,

      'Zipcode' : this.Zipcode,

      'Email' : this.Email,

      'Username' : this.Username,

      'Password' : this.Password,

      'LockUser' : this.LockUser,

      'TaxStatus' : this.TaxStatus,

      'MinimumWagesEarned' : this.MinimumWagesEarned,

      'COLA' : this.COLA,

      'WorkdaysPerYear' : this.WorkdaysPerYear,

      'BasicSalary' : this.BasicSalary,

      'Deminimis' : this.Deminimis,

      'OT_ComputationTable' : this.OT_ComputationTable,

      'SSS_Contribution' : this.SSS_Contribution,

      'PhilHealth_Contribution' : this.PhilHealth_Contribution,

      'HDMF_Contribution' : this.HDMF_Contribution,

      'Additional_HDMF_Contibution' : this.Additional_HDMF_Contibution,

      'JobTitle' : this.JobTitle,

      'Department' : this.Department,

      'CostCenter' : this.CostCenter,

      'HireDate' : this.HireDate,

      'Employment_Status' : this.Employment_Status,

      'StatusDate' : this.StatusDate,

      'Work_Hours_Per_Day' : this.Work_Hours_Per_Day,

      'Pay_Group' : this.Pay_Group,

      'ROHQ' : this.ROHQ,

      'Consultant' : this.Consultant,

      'Consultant_Tax' : this.Consultant_Tax,

      'Consultant_TaxNum' : this.Consultant_TaxNum,

      'Tin' : this.Tin,

      'RDO' : this.RDO,

      'PhilHealth_No' : this.PhilHealth_No,

      'SSS_No' : this.SSS_No,

      'HDMF_No' : this.HDMF_No,

      'SL' : this.SL,

      'VL' : this.VL,

      'LeaveCredit' : this.LeaveCredit,

      'Dependent1' : this.Dependent1,

      'Dependent1_DOB' : this.Dependent1_DOB,

      'Dependent2' : this.Dependent2,

      'Dependent2_DOB' : this.Dependent2_DOB,

      'Dependent3' : this.Dependent3,

      'Dependent3_DOB' : this.Dependent3_DOB,

      'Dependent4' : this.Dependent4,

      'Dependent4_DOB' : this.Dependent4_DOB,

      'Bank' : this.Bank,

      'Bank_AccountType' : this.Bank_AccountType,

      'Bank_AccountNo' : this.Bank_AccountNo,

      'HasPreviousEmployment' : this.HasPreviousEmployment,

      'NonTax_13thMonth' : this.NonTax_13thMonth,

      'NonTax_OtherBonus' : this.NonTax_OtherBonus,

      'NonTax_Salaries' : this.NonTax_Salaries,

      'ThirteenthMonth' : this.ThirteenthMonth,

      'OtherBonus' : this.OtherBonus,

      'TaxableGross' : this.TaxableGross,

      'Tax_Withheld' : this.Tax_Withheld,

      'GovernmentDeductions' : this.GovernmentDeductions,

      'PreviousEmployment_Deminimis' : this.PreviousEmployment_Deminimis,

      'TaxableCompensation' : this.TaxableCompensation,

         'MonetizedLeave' : this.MonetizedLeave
    }
    this.DgofficeService.UpdateEmployeeInformation(json).subscribe(
      data => {
        debugger
        let id = data;
		alert("Successfully saved!!")
       
      
      })

    
  }


}
