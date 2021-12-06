import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor( private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.GetBanks()
  }


  Update (dept: any){
    debugger
   location.href="/BankForm/"+ dept.id;
  }


  Departmentlist:any
  public GetBanks() {
    this.DgofficeServiceService.GetBanks().subscribe(data=>{
      debugger
      this.Departmentlist=data ;
     })
  }




}
