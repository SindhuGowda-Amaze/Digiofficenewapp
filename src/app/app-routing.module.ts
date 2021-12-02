import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from 'src/pages/sidebar/sidebar.component';
import { AdjustmentComponent } from 'src/app/adjustment/adjustment.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';
import { AdjustmentFormComponent } from './adjustment-form/adjustment-form.component';

const routes: Routes = [

  // { path: "", redirectTo: "Login", pathMatch: "full" },
  { path: "", redirectTo: "Adjustment", pathMatch: "full" }, 

  {
    path: "Sidebar", component: SidebarComponent
  },
  
  { path: "Adjustment",component:AdjustmentComponent},
  {
    path: "Header", component: HeaderComponent
  },
  {
    path: "Companyprofile", component: CompanyprofileComponent
  },
  {
    path: "Help", component: HelpComponent
  },
  {
    path: "Sproutpayroll", component: SproutPayrollComponent
  },
  {
    path: "AdjustmentForm", component: AdjustmentFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
