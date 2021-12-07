import { Component, OnInit } from '@angular/core';
import { DgofficeServiceService } from '../dgoffice-service.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private DgofficeServiceService:DgofficeServiceService) { }

  result: any;
  ID: any;
  passWord: any;
  Company_Name:any;
  ngOnInit(): void {
  }

  login() {
    debugger
    this.DgofficeServiceService.GetCompanyProfile().subscribe(data => {
        debugger
        this.result = data;
        // this.userName = "sindhu"
        // this.passWord = "25"
        let validData = data.filter(x => x.id == this.ID && x.password == this.passWord);
        if (validData.length == 1) {
          debugger
          alert("LOGIN  successful");
          sessionStorage.setItem("login",'1')
          sessionStorage.setItem("company_name",validData[0].company_Name);
          sessionStorage.setItem("company_id",validData[0].id);
          location.href = '/PayRoll';
        }
        else {
          alert("USERNAME OR PASSWORD IS NOT VALID");
        }
      }, error => {
        debugger
        console.log(error);
      }
    )
  }

}
