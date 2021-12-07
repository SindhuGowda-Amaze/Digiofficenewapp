import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../../dgoffice-service.service';

@Component({
  selector: 'app-tax-table',
  templateUrl: './tax-table.component.html',
  styleUrls: ['./tax-table.component.css']
})
export class TaxTableComponent implements OnInit {

  constructor(private DgofficeService:DgofficeServiceService) { }
   
  taxdetails:any;



  ngOnInit(): void {
    this.GetTaxtable();
  }

  public GetTaxtable() {
    debugger
    this.DgofficeService.GetTaxtable().subscribe(data=>{
      debugger
      this.taxdetails=data ;
     })
  }



}
