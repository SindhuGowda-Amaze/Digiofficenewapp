import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sssform',
  templateUrl: './sssform.component.html',
  styleUrls: ['./sssform.component.css']
})
export class SSSFormComponent implements OnInit {

  result: any;
  id: any;

  constructor(private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute: ActivatedRoute) { }

  selectMinRange: any;
  selectMaxRange: any;
  selectMonthlySalaryCredit: any;
  selectSSER: any;
  selectSSEE: any;
  selectSSTotal: any;
  selectMpfEr: any;
  selectMpfEe: any;
  selectEcEr: any;
  selectTotalContribution: any;

  ngOnInit(): void {
   this.ActivatedRoute.params.subscribe(params=>{
     debugger
    this.id=params["id"];
    if(this.id!=null&&this.id!=undefined){
      this.GetSSS();
    }
   })
  }

  GetSSS()
  {
  this.DgofficeServiceService.GetSSS().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));

      this.selectMinRange=this.result[0].min_Range;
      this.selectMaxRange=this.result[0].max_Range;
      this.selectMonthlySalaryCredit=this.result[0].monthly_Salary_Creadited;
      this.selectSSER=this.result[0].sS_ER;
      this.selectSSEE=this.result[0].sS_EE;
      this.selectSSTotal=this.result[0].sS_Total;
      this.selectMpfEr=this.result[0].mPF_ER;
      this.selectMpfEe=this.result[0].mPF_EE;
      this.selectEcEr=this.result[0].eC_ER;
      this.selectTotalContribution=this.result[0].total_Contribution;

    })
  }  
  save(){
     var json = {
    
    "Min_Range": this.selectMinRange,
    "Max_Range": this.selectMaxRange,
    "Monthly_Salary_Creadited": this.selectMonthlySalaryCredit,
    "SS_ER": this.selectSSER,
    "SS_EE": this.selectSSEE,
    "SS_Total": this.selectSSTotal,
    "MPF_ER": this.selectMpfEr,
    "MPF_EE": this.selectMpfEe,
    "EC_ER": this.selectEcEr,
    "Total_Contribution": this.selectTotalContribution,

  };

  this.DgofficeServiceService.InsertSSS(json).subscribe(
    data => {
    debugger
    let result = data;
    location.href="/SSS/"
  })

  alert("Mentioned MaxRange is "+this.selectMinRange)
  alert("Mentioned MaxRange is "+this.selectMaxRange)
  }
}
