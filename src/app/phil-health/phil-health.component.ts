import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-phil-health',
  templateUrl: './phil-health.component.html',
  styleUrls: ['./phil-health.component.css']
})
export class PhilHealthComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetPhilHealth();
  }

  salarylist:any;

  public GetPhilHealth() {
    debugger
    this.DgofficeServiceService.GetPhilHealth().subscribe(data=>{
      debugger
      this.salarylist=data ;
     })
  }


}
