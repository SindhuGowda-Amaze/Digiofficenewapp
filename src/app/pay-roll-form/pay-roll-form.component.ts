import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pay-roll-form',
  templateUrl: './pay-roll-form.component.html',
  styleUrls: ['./pay-roll-form.component.css']
})
export class PayRollFormComponent implements OnInit {

  constructor(private DgofficeService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
    
  year:any;
  month:any;
  period:any;
  payrollRunType:any;
  payGroup:any;
  description:any;
  ddmmyyyy:any;

  ngOnInit(): void {

  }

  Save() {
    debugger
    var json = {
      "Year": this.year,
      "Month": this.month,
      "Period": this.period,
      "Pay_Roll_Run_Type":this.payrollRunType,
      "Pay_Group":this. payrollRunType,
      "Description":this.description,
      "Transaction_Date":this.ddmmyyyy   
    };
    this.DgofficeService.InsertPayroll(json).subscribe(
      data => {     
        Swal.fire("Saved Sucessfully");
      location.href = "PayRoll";

      }
    )
  }






}
