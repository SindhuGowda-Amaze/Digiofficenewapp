import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  constructor(private DgofficeServiceService: DgofficeServiceService,private ActivatedRoute: ActivatedRoute) { }

  Departmentlist:any;
  id:any;
  name:any;
  code:any;
  writeremarks:any;
  result:any;



  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){  
       this.GetDepartment();
     }
    })
  }

  GetDepartment()
  {
  this.DgofficeServiceService.GetDepartment().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
      this.name=this.result[0].name;
      this.code=this.result[0].code;
      this.writeremarks=this.result[0].remarks;   
    })
  } 

  Save() {
    debugger
    var json = {
      "Name": this.name,
      "Code": this.code,
      "Remarks": this.writeremarks
     
    };
    this.DgofficeServiceService.InsertDepartment(json).subscribe(
      data => {     
        Swal.fire("Saved Sucessfully");
      location.href = "Department";

      }
    )
  }
 
  Update(){
    debugger
    var json = {
      "ID":this.id,
      "Name": this.name,
      "Code": this.code,
      "Remarks": this.writeremarks     
    };
  
    this.DgofficeServiceService.UpdateDepartment(json).subscribe(
      data => {
      debugger
      let result = data;
      location.href="/Department";
      Swal.fire("Update Sucessfully");
    })
  }













}
