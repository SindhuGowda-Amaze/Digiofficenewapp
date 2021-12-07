import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../../dgoffice-service.service';
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
 

   Update (cost: any){
    debugger
   location.href="/CostCenterForm/"+ cost.id;
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

  costcenterlist1:any
  ModifiedBy:any
  ModifiedDate:any
  Changes:any
   public getcost(id:any){
    debugger
    this.DgofficeServiceService.GetCostcenter().subscribe(data=>{
      debugger
      this.costcenterlist1=data.filter(x=>x.id==id) ;
      this.ModifiedBy = this.costcenterlist1[0].modifiedBy
      this.ModifiedDate = this.costcenterlist1[0].modifiedDate
      this.Changes = this.costcenterlist1[0].changes

   }
    )}



}
