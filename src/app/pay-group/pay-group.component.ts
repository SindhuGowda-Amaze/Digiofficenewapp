import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';

@Component({
  selector: 'app-pay-group',
  templateUrl: './pay-group.component.html',
  styleUrls: ['./pay-group.component.css']
})
export class PayGroupComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService) { }

  ngOnInit(): void {
    this.GetPayGroup()
  }

  result:any

  public GetPayGroup() {
    this.DgofficeServiceService.GetPayGroup().subscribe(data=>{
      debugger
      this.result=data ;
     })
  }



  delete(details: any){
    var json={
      "ID":details.id
    }
    this.DgofficeServiceService.DeletePayGroup(json).subscribe(
      data => {
        debugger        
        this.DgofficeServiceService.GetPayGroup().subscribe(
          data => {
            debugger
            this.result = data;
        })
    })
  }

}
