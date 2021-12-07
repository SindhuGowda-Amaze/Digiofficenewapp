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

import { AuthGuard } from './services/auth.guard';
import { BankFormComponent } from './Company/bank-form/bank-form.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CompanyProfileDashboardComponent } from './Company/company-profile-dashboard/company-profile-dashboard.component';

const routes: Routes = [

  
  { path: "", redirectTo: "Login", pathMatch: "full" }, 



  {
    path: "Sidebar", component: SidebarComponent,canActivate: [AuthGuard]
  },
  { path: "Adjustment", component: AdjustmentComponent,canActivate: [AuthGuard] },
  {
    path: "Header", component: HeaderComponent,canActivate: [AuthGuard]
  },
  {
    path: "Companyprofile", component: CompanyprofileComponent,canActivate: [AuthGuard]
  },
  {
    path: "Help", component: HelpComponent,canActivate: [AuthGuard]
  },
  {
    path: "Companyprofile/:id", component: CompanyprofileComponent
  },

  {
    path: "AdjustmentForm", component: AdjustmentFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "CostCenterForm", component: CostCenterFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "CompanyAdjustmentForm", component: CompanyAdjustmentFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "EmployeeForm", component: EmployeeFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "DepartmentForm", component: DepartmentFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "DepartmentForm/:id", component: DepartmentFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "GeneralLedgerForm", component: GeneralLedgerFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "OtRatesForm", component: OtRatesFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "PayGroupForm", component: PayGroupFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "PayGroupForm/:id", component: PayGroupFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "PayRollForm", component: PayRollFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "PhillHealthForm", component: PhillHealthFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "sssForm", component: SSSFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "UsersForm", component: UsersFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "BankForm", component: BankFormComponent,canActivate: [AuthGuard]
  
  },
  { 
    path: "PhillHealthForm/:id", component: PhillHealthFormComponent,canActivate: [AuthGuard]
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
    path: "BankForm/:id", component: BankFormComponent,canActivate: [AuthGuard]
  },
  {
    path: "Login", component: LoginScreenComponent
  },
  { path: "Adolfo", component: AdolfoComponent,canActivate: [AuthGuard] },

  {
    path: "Adolfo/:id", component: AdolfoComponent,canActivate: [AuthGuard]
  },

  { path: "CompanyAdjustment", component: CompanyAdjustmentComponent,canActivate: [AuthGuard] },

  { path: "CostCenter", component: CostCenterComponent,canActivate: [AuthGuard]},

  { path: "CostCenterForm/:id", component: CostCenterFormComponent,canActivate: [AuthGuard] },

  { path: 'Department', component: DepartmentComponent,canActivate: [AuthGuard] },

  { path: 'Employee', component: EmployeeComponent,canActivate: [AuthGuard]},

  { path: 'GeneralLedger', component: GeneralLedgerComponent,canActivate: [AuthGuard] },

  { path: 'OtRates', component: OtRatesComponent,canActivate: [AuthGuard] },

  { path: 'PayGroup', component: PayGroupComponent,canActivate: [AuthGuard] },

  { path: 'PayRoll', component: PayRollComponent,canActivate: [AuthGuard] },

  { path: 'PhilHealth', component: PhilHealthComponent,canActivate: [AuthGuard] },

  { path: 'SSS', component: SSSComponent,canActivate: [AuthGuard] },

  { path: 'User', component: UserComponent ,canActivate: [AuthGuard]},

  { path: 'Bank', component: BankComponent,canActivate: [AuthGuard]},

  { path: 'Government', component: GovernmentComponent,canActivate: [AuthGuard] },

  { path: 'TaxTable', component: TaxTableComponent,canActivate: [AuthGuard]},

  { path: 'Government', component: GovernmentComponent,canActivate: [AuthGuard] },

  { path: 'CompanyProfileDashboard', component: CompanyProfileDashboardComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
