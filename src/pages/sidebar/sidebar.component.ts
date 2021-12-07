import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  company_name: any;
  login:any
  ngOnInit(): void {
    this.login=sessionStorage.getItem('login')
    this.company_name=sessionStorage.getItem('company_name')
  }

}
