import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-group-form',
  templateUrl: './pay-group-form.component.html',
  styleUrls: ['./pay-group-form.component.css']
})
export class PayGroupFormComponent implements OnInit {
  
  result: any;
  id: any;

  constructor(private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute: ActivatedRoute) { }

  selectDescription: any;

  ngOnInit(): void {
   this.ActivatedRoute.params.subscribe(params=>{
     debugger
    this.id=params["id"];
    if(this.id!=null&&this.id!=undefined){
      this.GetPayGroup();
    }
   })
  }

  GetPayGroup()
  {
  this.DgofficeServiceService.GetPayGroup().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));

      this.selectDescription=this.result[0].description;
      

    })
  }  
  save(){
     var json = {
    
    "Description": this.selectDescription,

  };

  this.DgofficeServiceService.InsertPayGroup(json).subscribe(
    data => {
    debugger
    let result = data;
    location.href="/PayGroup/"
  })

  alert("Your Description is "+this.selectDescription)
  }

}
