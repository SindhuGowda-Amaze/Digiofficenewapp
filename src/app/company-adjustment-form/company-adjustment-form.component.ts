import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-adjustment-form',
  templateUrl: './company-adjustment-form.component.html',
  styleUrls: ['./company-adjustment-form.component.css']
})
export class CompanyAdjustmentFormComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
  type:any;
  name:any;
  code:any;
  amount:any;
  writeremarks:any;
  before:any;
  taxable:any;
  maxaccumulated:any;


  ngOnInit(): void {
  }
  
        async Save()  {
     debugger
     var json={
       "Type":this.type,
       "Name":this.name,
       "Code":this.code,
       "Remarks":this.writeremarks,
       "Amount":this.amount,
       "BeforeTax":this.before,
       "Taxable":this.taxable,
       "MaxAccumulated":this.maxaccumulated
     };
      this.DgofficeServiceService.InsertCompanyAdjustment(json).subscribe(
        data=>{
          debugger
          Swal.fire("Saved Sucessfully");
          // location.href = "CompanyAdjustment";
          
        }
       

      )




   }




}
