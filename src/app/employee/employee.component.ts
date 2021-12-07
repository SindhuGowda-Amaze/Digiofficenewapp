import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
  Departmentlist:any
  ngOnInit(): void {
    this.GetEmployeeInformation();
  }


  public GetEmployeeInformation() {
    debugger
    this.DgofficeServiceService.GetEmployeeInformation().subscribe(data=>{
      debugger
      this.Departmentlist=data ;
     })
  }


  Update (dept: any){
    debugger
   location.href="/Adolfo/"+ dept;
  }

}
