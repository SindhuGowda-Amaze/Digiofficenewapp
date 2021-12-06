import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.css']
})
export class GovernmentComponent implements OnInit {

  result: any;
  id: any;

  constructor(private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute: ActivatedRoute) { }

  selectSSS: any;
  selectSSSDatePaid: any;
  selectSSSloan: any;
  selectSSSloanDatePaid: any;
  selectSSSCalamityLoan: any;
  selectSSSCalamityLoanDatePaid: any;
  selectPhilHealth: any;
  selectPhilHealthDatePaid: any;
  selectHDMF: any;
  selectHDMFDatePaid: any;
  selectHDMFLoan: any;
  selectHDMFLoanDatePaid: any;
  selectHdmpCalamityLoan: any;
  selectHdmpCalamityLoanDatePaid: any;

  ngOnInit(): void {
   this.ActivatedRoute.params.subscribe(params=>{
     debugger
    this.id=params["id"];
    if(this.id!=null&&this.id!=undefined){
      this.GetGovernmentRecords();
    }
   })
  }

  GetGovernmentRecords()
  {
  this.DgofficeServiceService.GetGovernmentRecords().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));

      this.selectSSS=this.result[0].sSS_Number;
      this.selectSSSDatePaid=this.result[0].sSS_DatePaid;
      this.selectSSSloan=this.result[0].sSSLoan_Number;
      this.selectSSSloanDatePaid=this.result[0].sSSLoan_DatePaid;
      this.selectSSSCalamityLoan=this.result[0].sSSCalamityLoan_Number;
      this.selectSSSCalamityLoanDatePaid=this.result[0].sSSCalamityLoan_DatePaid;
      this.selectPhilHealth=this.result[0].philHealth_Number;
      this.selectPhilHealthDatePaid=this.result[0].philHealth_DatePaid;
      this.selectHDMF=this.result[0].hDMF_Number;
      this.selectHDMFDatePaid=this.result[0].hDMF_DatePaid;
      this.selectHDMFLoan=this.result[0].hDMFLoan_Number;
      this.selectHDMFLoanDatePaid=this.result[0].hDMFLoan_DatePaid;
      this.selectHdmpCalamityLoan=this.result[0].hDMPCalamityLoan_Number;
      this.selectHdmpCalamityLoanDatePaid=this.result[0].hDMPCalamityLoan_DatePaid;
    })
  }  
  save(){
     var json = {
    
    "SSS_Number": this.selectSSS,
    "SSS_DatePaid": this.selectSSSDatePaid,
    "SSSLoan_Number": this.selectSSSloan,
    "SSSLoan_DatePaid": this.selectSSSloanDatePaid,
    "SSSCalamityLoan_Number": this.selectSSSCalamityLoan,
    "SSSCalamityLoan_DatePaid": this.selectSSSCalamityLoanDatePaid,
    "PhilHealth_Number": this.selectPhilHealth,
    "PhilHealth_DatePaid": this.selectPhilHealthDatePaid,
    "HDMF_Number": this.selectHDMF,
    "HDMF_DatePaid": this.selectHDMFDatePaid,
    "HDMFLoan_Number": this.selectHDMFLoan,
    "HDMFLoan_DatePaid": this.selectHDMFLoanDatePaid,
    "HDMPCalamityLoan_Number": this.selectHdmpCalamityLoan,
    "HDMPCalamityLoan_DatePaid": this.selectHdmpCalamityLoanDatePaid,



  };

  this.DgofficeServiceService.InsertGovernmentRecords(json).subscribe(
    data => {
    debugger
    let result = data;
    location.href="/Government/"
  })

  alert("Mentioned SSRnumber is "+this.selectSSS)
  alert("Mentioned DatePaid is "+this.selectSSSDatePaid)
  }

}
