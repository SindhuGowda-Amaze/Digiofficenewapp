import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-roll',
  templateUrl: './pay-roll.component.html',
  styleUrls: ['./pay-roll.component.css']
})
export class PayRollComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
  employedetails:any;


  ngOnInit(): void {
    this.GetPayroll();
  }
  
  public GetPayroll() {
    debugger
    this.DgofficeServiceService.GetPayroll().subscribe(data=>{
      debugger
      this.employedetails=data ;
     })
  }



}
