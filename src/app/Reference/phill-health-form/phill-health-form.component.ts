import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phill-health-form',
  templateUrl: './phill-health-form.component.html',
  styleUrls: ['./phill-health-form.component.css']
})
export class PhillHealthFormComponent implements OnInit {

  result: any;
  id: any;

  constructor(private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute:ActivatedRoute) { }
   
  monthlybasicsalary:any;
  monthlyshare:any;
  personalshare:any;
  employershare:any;


  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){
       this.GetPhilHealth();
     }
    })
  }
 
  GetPhilHealth()
  {
  this.DgofficeServiceService.GetPhilHealth().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));
 
      this.monthlybasicsalary=this.result[0].monthly_Basic_Salary_Into_Five;
      this.monthlyshare=this.result[0].monthly_Share;
      this.personalshare=this.result[0].personal_Share;
      this.employershare=this.result[0].employee_Share;
       
 
     })
  }
     
  save(){
      var json = {
     
     "Monthly_Basic_Salary_Into_Five": this.monthlybasicsalary,
     "Monthly_Share": this.monthlyshare,
     "Personal_Share": this.personalshare,
     "Employee_Share": this.employershare,
 
  };
 
  this.DgofficeServiceService.InsertPhilHealth(json).subscribe(
     data => {
     debugger
     let result = data;
     location.href="/PhilHealth/"
  })
 
  alert("Mentioned Monthly basicsalary is "+this.monthlybasicsalary)
  alert("Mentioned Monthly share is "+this.monthlyshare)
  }
 
  Update(){
    debugger
    var json = {
      "ID":this.id,
      "Monthly_Basic_Salary_Into_Five": this.monthlybasicsalary,
      "Monthly_Share": this.monthlyshare,
      "Personal_Share": this.personalshare,
      "Employee_Share": this.employershare,   
    };
   
    this.DgofficeServiceService.UpdatePhilHealth(json).subscribe(
      data => {
      debugger
      let result = data;
      location.href="/PhilHealth/";
      Swal.fire("Update Sucessfully.....!");
    })
  }




}