import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.css']
})
export class CostCenterComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }

  costcenterlist:any;
  result:any;

  ngOnInit(): void {

      this.GetCostcenter();
  }

  public GetCostcenter() {
    debugger
    this.DgofficeServiceService.GetCostcenter().subscribe(data=>{
      debugger
      this.costcenterlist=data ;
     })
   }

   
   delete(cost: any){
  
    debugger
    this.DgofficeServiceService.DeleteCostcenter(cost).subscribe(
      data => {
        debugger        
        this.DgofficeServiceService.GetCostcenter().subscribe(
          data => {
            debugger
            this.result = data;
            location.reload()
           
        })
    })
  }





}
