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
  ngOnInit(): void {
  }


  name:any;
  code:any;
  writeremarks:any;

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


}
