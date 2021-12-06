import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';

@Component({
  selector: 'app-sss',
  templateUrl: './sss.component.html',
  styleUrls: ['./sss.component.css']
})
export class SSSComponent implements OnInit {

  constructor( private DgofficeServiceService:DgofficeServiceService) { }

  ngOnInit(): void {
   this.GetSSS()
  }


  SSSdatalist:any
  public GetSSS() {
    this.DgofficeServiceService.GetSSS().subscribe(data=>{
      debugger
      this.SSSdatalist=data ;
     })
  }
}
