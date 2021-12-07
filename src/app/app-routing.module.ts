import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from 'src/pages/sidebar/sidebar.component';
import { CompanyprofileComponent } from './Company/companyprofile/companyprofile.component';
import { AdjustmentComponent } from 'src/app/adjustment/adjustment.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';
import { AdjustmentFormComponent } from './adjustment-form/adjustment-form.component';
import { AdolfoComponent } from './adolfo/adolfo.component';
import { CompanyAdjustmentComponent } from './company-adjustment/company-adjustment.component';
import { CostCenterComponent } from './Company/cost-center/cost-center.component';
import { DepartmentComponent } from './Company/department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { CostCenterFormComponent } from './Company/cost-center-form/cost-center-form.component';
import { CompanyAdjustmentFormComponent } from './company-adjustment-form/company-adjustment-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DepartmentFormComponent } from './Company/department-form/department-form.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { OtRatesComponent } from './ot-rates/ot-rates.component';
import { PayGroupComponent } from './Company/pay-group/pay-group.component';
import { PayRollComponent } from './pay-roll/pay-roll.component';
import { PhilHealthComponent } from './phil-health/phil-health.component';
import { SSSComponent } from './sss/sss.component';
import { UserComponent } from './user/user.component';
import { BankComponent } from './Company/bank/bank.component';
import { GeneralLedgerFormComponent } from './general-ledger-form/general-ledger-form.component';
import { OtRatesFormComponent } from './ot-rates-form/ot-rates-form.component';
import { PayGroupFormComponent } from './Company/pay-group-form/pay-group-form.component';
import { PayRollFormComponent } from './pay-roll-form/pay-roll-form.component';
import { PhillHealthFormComponent } from './phill-health-form/phill-health-form.component';
import { SSSFormComponent } from './sssform/sssform.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { GovernmentComponent } from './government/government.component';
import { TaxTableComponent } from './tax-table/tax-table.component';
import { BankFormComponent } from './Company/bank-form/bank-form.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CompanyProfileDashboardComponent } from './Company/company-profile-dashboard/company-profile-dashboard.component';

const routes: Routes = [

  
  { path: "", redirectTo: "Login", pathMatch: "full" }, 

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
    path: "Companyprofile/:id", component: CompanyprofileComponent
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
  {
    path: "DepartmentForm/:id", component: DepartmentFormComponent
  },
  {
    path: "GeneralLedgerForm", component: GeneralLedgerFormComponent
  },
  {
    path: "OtRatesForm", component: OtRatesFormComponent
  },
  {
    path: "PayGroupForm", component: PayGroupFormComponent
  },
  {
    path: "PayGroupForm/:id", component: PayGroupFormComponent
  },
  {
    path: "PayRollForm", component: PayRollFormComponent
  },
  {
    path: "PhillHealthForm", component: PhillHealthFormComponent
  },
  {
    path: "PhillHealthForm/:id", component: PhillHealthFormComponent
  },
  {
    path: "sssForm", component: SSSFormComponent
  },
  {
    path: "sssForm/:id", component: SSSFormComponent
  },
  {
    path: "UsersForm", component: UsersFormComponent
  },
  {
    path: "BankForm", component: BankFormComponent
  },
  {
    path: "BankForm/:id", component: BankFormComponent
  },
  {
    path: "Login", component: LoginScreenComponent
  },
  {path:"Adolfo",component:AdolfoComponent},
  
  {path:"CompanyAdjustment",component:CompanyAdjustmentComponent},

  {path:"CostCenter",component:CostCenterComponent},

  {path:"CostCenterForm/:id", component: CostCenterFormComponent},

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

  {path:'Government',component:GovernmentComponent},
  
  {path:'TaxTable',component:TaxTableComponent},
  
  {path:'Government',component:GovernmentComponent},

  {path:'CompanyProfileDashboard',component:CompanyProfileDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
