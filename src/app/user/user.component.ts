
import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private DgofficeService: DgofficeServiceService) { }

  ngOnInit(): void {
  }
  Departmentlist:any
  public GetEmployeeInformation() {
    debugger
    this.DgofficeService.GetEmployeeInformation().subscribe(data=>{
      debugger
      this.Departmentlist=data.filter(x=>x.lockUser=='1');
     })
  }


}
