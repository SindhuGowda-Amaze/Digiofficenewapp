import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor( private DgofficeServiceService:DgofficeServiceService) { }

  ngOnInit(): void {
   this.GetBanks()
  }


  Departmentlist:any
  public GetBanks() {
    this.DgofficeServiceService.GetBanks().subscribe(data=>{
      debugger
      this.Departmentlist=data ;
     })
  }




}
