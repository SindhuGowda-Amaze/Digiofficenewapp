import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phill-health-form',
  templateUrl: './phill-health-form.component.html',
  styleUrls: ['./phill-health-form.component.css']
})
export class PhillHealthFormComponent implements OnInit {

  constructor(private DgofficeService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
   
  monthlybasicsalary:any;
  monthlyshare:any;
  personalshare:any;
  employershare:any;


  ngOnInit(): void {
  }

  Save() {
    debugger
    var json ={
      "Monthly_Basic_Salary_Into_Five":this.monthlybasicsalary,
      "Monthly_Share":this.monthlyshare,
      "Personal_Share":this.personalshare,
      "Employee_Share":this.employershare
    };
 
    this.DgofficeService.InsertPhilHealth(json).subscribe(
      data => {     
        Swal.fire("Saved Sucessfully");
      location.href = "PhilHealth";
    }
    )
  }


}