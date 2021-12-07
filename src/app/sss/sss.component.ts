import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sss',
  templateUrl: './sss.component.html',
  styleUrls: ['./sss.component.css']
})
export class SSSComponent implements OnInit {

  constructor( private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.GetSSS()
  }


  Update (SSSdata: any){
    debugger
   location.href="/sssForm/"+ SSSdata.id;
  }


  SSSdatalist:any

  public GetSSS() {
    debugger
    this.DgofficeServiceService.GetSSS().subscribe(data=>{
      debugger
      this.SSSdatalist=data ;
     })
  }

  delete(id: any){
    debugger;
  
    this.DgofficeServiceService.DeleteSSS(id).subscribe(
      data => {
       Swal.fire('Deleted Successfully...!')   
       location.reload() 
    })
  }

}
