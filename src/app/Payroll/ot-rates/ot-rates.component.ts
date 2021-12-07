import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../../dgoffice-service.service';

@Component({
  selector: 'app-ot-rates',
  templateUrl: './ot-rates.component.html',
  styleUrls: ['./ot-rates.component.css']
})
export class OtRatesComponent implements OnInit {


  constructor(private DgofficeService: DgofficeServiceService) { }
  Otlist:any
  ngOnInit(): void {
    this.GetOtRates();
  }



  public GetOtRates() {
    debugger
    
    this.DgofficeService.GetOTRates().subscribe(data => {

      this.Otlist = data;
    })
  }

}
