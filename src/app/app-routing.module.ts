import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from 'src/pages/sidebar/sidebar.component';
import { CompanyprofileComponent } from '../pages/companyprofile/companyprofile.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  { path: "", redirectTo: "Login", pathMatch: "full" },
  {
    path: "Sidebar", component: SidebarComponent
  },
  {
    path: "Header", component: HeaderComponent
  },
  {
    path: "Companyprofile", component: CompanyprofileComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
