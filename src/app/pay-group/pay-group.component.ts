import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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


   
  Update (details: any){
    debugger
   location.href="/PayGroupForm/"+ details.id;
  }


  delete(id: any){
    debugger;
  
    this.DgofficeServiceService.DeletePayGroup(id).subscribe(
      data => {
       Swal.fire('Deleted Successfully')   
       location.reload() 
    })
  }

}
