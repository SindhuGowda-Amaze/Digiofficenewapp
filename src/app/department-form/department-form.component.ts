import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  constructor(private DgofficeServiceService: DgofficeServiceService,private ActivatedRoute: ActivatedRoute) { }

  Departmentlist:any;
  ngOnInit(): void {
  }


  name:any;
  code:any;
  writeremarks:any;

  Save() {
    debugger;
    var json = {
      "Name": this.name,
      "Code": this.code,
      "Remarks": this.writeremarks,
     
    };
    this.DgofficeServiceService.InsertDepartment(json).subscribe(
      data => {     
        alert("Saved Sucessfully");
        // location.href = "NewFormDashboard";

      }
    )
  }


}
