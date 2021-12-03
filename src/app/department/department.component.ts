import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService) { }
  Departmentlist:any;

  ngOnInit(): void {
  }


  public GetDepartment() {
    this.DgofficeServiceService.GetDepartment().subscribe(data=>{
      debugger
      this.Departmentlist=data ;
     })
  }









}
