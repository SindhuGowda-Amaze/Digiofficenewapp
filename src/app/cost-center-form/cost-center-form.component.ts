import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DgofficeServiceService } from '../dgoffice-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cost-center-form',
  templateUrl: './cost-center-form.component.html',
  styleUrls: ['./cost-center-form.component.css']
})
export class CostCenterFormComponent implements OnInit {

  constructor(private DgofficeService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
  id:any;
 

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){  
       this.GetCostcenter();

     }
    })
  }

  GetCostcenter()
  {
  this.DgofficeService.GetCostcenter().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
      this.name=this.result[0].name;
      this.code=this.result[0].code;
      this.writeremarks=this.result[0].remarks;
      this.changes=this.result[0].changes;
      this.modifiedBy=this.result[0].modifiedBy;
     
    })
  }  

  ID:any;
  name:any;
  code:any;
  writeremarks:any;
  changes:any;
  modifiedBy:any;
  result:any;

  
  Save() {
    debugger;
    var json = {
      "Name": this.name,
      "Code": this.code,
      "Remarks": this.writeremarks, 
    };
    this.DgofficeService.InsertCostcenter(json).subscribe(
      data => {     
        Swal.fire("Saved Sucessfully");
        location.href = "CostCenter";

      }
    )
  }

  Update(){
    debugger
    var json = {
      "ID":this.id,
      "Name": this.name,
      "Code": this.code,
      "Remarks": this.writeremarks, 
      "modifiedBy":this.modifiedBy,
      "changes":this.changes,
     
    };
  
    this.DgofficeService.UpdateCostcenter(json).subscribe(
      data => {
      debugger
      let result = data;
      location.href="/CostCenter";
      Swal.fire("Update Sucessfully");
    })
  }






}
