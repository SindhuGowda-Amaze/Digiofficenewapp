import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-adjustment',
  templateUrl: './company-adjustment.component.html',
  styleUrls: ['./company-adjustment.component.css']
})
export class CompanyAdjustmentComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
  companylist:any;
  ngOnInit(): void {
    this.GetCompanyAdjustment();
  }
    
  public GetCompanyAdjustment() {
    debugger
    this.DgofficeServiceService.GetCompanyAdjustment().subscribe(data=>{
      debugger
      this.companylist=data ;
     })
  }

delete(ID:any){
  debugger
  
  this.DgofficeServiceService.DeleteCompanyAdjustment(ID).subscribe(data=>{
     Swal.fire("Deleted Sucesfully")
     this.GetCompanyAdjustment();
  })
}




}
