import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../../dgoffice-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {

  result: any;
  id: any;

  constructor(private DgofficeServiceService:DgofficeServiceService, private ActivatedRoute: ActivatedRoute) { }

  selectName: any;
  selectCode: any;
  selectRemarks: any;

  ngOnInit(): void {
   this.ActivatedRoute.params.subscribe(params=>{
     debugger
    this.id=params["id"];
    if(this.id!=null&&this.id!=undefined){
      this.GetBanks();
    }
   })
  }

  GetBanks()
  {
  this.DgofficeServiceService.GetBanks().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));

      this.selectName=this.result[0].name;
      this.selectCode=this.result[0].code;
      this.selectRemarks=this.result[0].remarks;
      

    })
  }  
  save(){
     var json = {
    
    "Name": this.selectName,
    "Code": this.selectCode,
    "Remarks": this.selectRemarks,

  };

  this.DgofficeServiceService.InsertBanks(json).subscribe(
    data => {
    debugger
    let result = data;
    location.href="/Bank/"
  })

  alert("Mentioned Name is "+this.selectName)
  alert("Mentioned Code is "+this.selectCode)
  }

  Update(){
    debugger
    var json = {
      "ID":this.id,
      "Name": this.selectName,
      "Code": this.selectCode,
      "Remarks": this.selectRemarks     
    };
  
    this.DgofficeServiceService.UpdateBanks(json).subscribe(
      data => {
      debugger
      let result = data;
      location.href="/Bank/";
      Swal.fire("Update Sucessfully.....!");
    })
  }

  

}
