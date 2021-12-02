import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from 'src/pages/sidebar/sidebar.component';
import { AdjustmentComponent } from 'src/app/adjustment/adjustment.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';
import { AdjustmentFormComponent } from './adjustment-form/adjustment-form.component';
import { AdolfoComponent } from './adolfo/adolfo.component';
import { CompanyAdjustmentComponent } from './company-adjustment/company-adjustment.component';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { CostCenterFormComponent } from './cost-center-form/cost-center-form.component';
import { CompanyAdjustmentFormComponent } from './company-adjustment-form/company-adjustment-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DepartmentFormComponent } from './department-form/department-form.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { OtRatesComponent } from './ot-rates/ot-rates.component';
import { PayGroupComponent } from './pay-group/pay-group.component';
import { PayRollComponent } from './pay-roll/pay-roll.component';
import { PhilHealthComponent } from './phil-health/phil-health.component';
import { SSSComponent } from './sss/sss.component';
import {UserComponent} from './user/user.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [

  { path: "", redirectTo: "Login", pathMatch: "full" },
  
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
  {
    path: "CostCenterForm", component: CostCenterFormComponent
  },
  {
    path: "CompanyAdjustmentForm", component: CompanyAdjustmentFormComponent
  },
  {
    path: "EmployeeForm", component: EmployeeFormComponent
  },
  {
    path: "DepartmentForm", component: DepartmentFormComponent
  },
  {path:"Adolfo",component:AdolfoComponent},
  
  {path:"CompanyAdjustment",component:CompanyAdjustmentComponent},

  {path:"CostCenter",component:CostCenterComponent},

  {path:'Department',component:DepartmentComponent},
  
  {path:'Employee',component:EmployeeComponent},

  {path:'GeneralLedger',component:GeneralLedgerComponent},
  
  {path:'OtRates',component:OtRatesComponent},
  
  {path:'PayGroup',component:PayGroupComponent},
  
  {path:'PayRoll',component:PayRollComponent},

  {path:'PhilHealth',component: PhilHealthComponent},
  
  {path:'SSS',component:SSSComponent},
  
  {path:'User',component: UserComponent},

  {path:'Bank',component:BankComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
