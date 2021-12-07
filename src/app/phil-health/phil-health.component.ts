import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-phil-health',
  templateUrl: './phil-health.component.html',
  styleUrls: ['./phil-health.component.css']
})
export class PhilHealthComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetPhilHealth();
  }

  Update (salary: any){
    debugger
   location.href="/PhillHealthForm/"+ salary.id;
  }

  salarylist:any;

  public GetPhilHealth() {
    debugger
    this.DgofficeServiceService.GetPhilHealth().subscribe(data=>{
      debugger
      this.salarylist=data ;
     })
  }


  delete(id: any){
    debugger;
  
    this.DgofficeServiceService.DeletePhilHealth(id).subscribe(
      data => {
       Swal.fire('Deleted Successfully...!')   
       location.reload() 
    })
  }


}
