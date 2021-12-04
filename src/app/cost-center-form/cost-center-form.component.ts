import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DgofficeServiceService } from '../dgoffice-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cost-center-form',
  templateUrl: './cost-center-form.component.html',
  styleUrls: ['./cost-center-form.component.css']
})
export class CostCenterFormComponent implements OnInit {

  constructor(private DgofficeService:DgofficeServiceService,private ActivatedRoute:ActivatedRoute) { }
 
 

  ngOnInit(): void {
  }

  name:any;
  code:any;
  writeremarks:any;
  
  Save() {
    debugger;
    var json = {
      "Name": this.name,
      "Code": this.code,
      "Remarks": this.writeremarks, 
    };
    this.DgofficeService.InsertCostcenter(json).subscribe(
      data => {     
        Swal.fire("Saved Sucessfully");
        location.href = "CostCenter";

      }
    )
  }


}
