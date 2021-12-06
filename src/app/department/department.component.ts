import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
  Departmentlist:any;
  result:any;

  ngOnInit(): void {
    this.GetDepartment();
  }


  public GetDepartment() {
    debugger
    this.DgofficeServiceService.GetDepartment().subscribe(data=>{
      debugger
      this.Departmentlist=data ;
     })
  }


  
  Update (dept: any){
    debugger
   location.href="/DepartmentForm/"+ dept.id;
  }

  
  delete(dept: any){
  
    debugger
    this.DgofficeServiceService.DeleteDepartment(dept).subscribe(
      data => {
        debugger        
        this.DgofficeServiceService.GetDepartment().subscribe(
          data => {
            debugger
            this.result = data;
            location.reload()
           
        })
    })
  }








}
