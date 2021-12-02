import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from '../pages/sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CompanyprofileComponent } from '../pages/companyprofile/companyprofile.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { AdolfoComponent } from './adolfo/adolfo.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';
import { AdjustmentFormComponent } from './adjustment-form/adjustment-form.component';
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
import { UserComponent } from './user/user.component';
import { BankComponent } from './bank/bank.component';
import { GeneralLedgerFormComponent } from './general-ledger-form/general-ledger-form.component';
import { OtRatesFormComponent } from './ot-rates-form/ot-rates-form.component';
import { PayGroupFormComponent } from './pay-group-form/pay-group-form.component';
import { PayRollFormComponent } from './pay-roll-form/pay-roll-form.component';
import { PhillHealthFormComponent } from './phill-health-form/phill-health-form.component';
import { SSSFormComponent } from './sssform/sssform.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { GovernmentComponent } from './government/government.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    AdjustmentComponent,
    AdolfoComponent,
    CompanyprofileComponent,
    HelpComponent,
    SproutPayrollComponent,
    AdjustmentFormComponent,
    CompanyAdjustmentComponent,
    CostCenterComponent,
    DepartmentComponent,
    EmployeeComponent,
    CostCenterFormComponent,
    CompanyAdjustmentFormComponent,
    EmployeeFormComponent,
    DepartmentFormComponent,
    GeneralLedgerComponent,
    OtRatesComponent,
    PayGroupComponent,
    PayRollComponent,
    PhilHealthComponent,
    SSSComponent,
    UserComponent,
    BankComponent,
    GeneralLedgerFormComponent,
    OtRatesFormComponent,
    PayGroupFormComponent,
    PayRollFormComponent,
    PhillHealthFormComponent,
    SSSFormComponent,
    UsersFormComponent,
    GovernmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
