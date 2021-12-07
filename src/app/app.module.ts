import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from '../pages/sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CompanyprofileComponent } from './Company/companyprofile/companyprofile.component';
import { AdjustmentComponent } from './Payroll/adjustment/adjustment.component';
import { AdolfoComponent } from './adolfo/adolfo.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';
import { AdjustmentFormComponent } from './Payroll/adjustment-form/adjustment-form.component';
import { CompanyAdjustmentComponent } from './Payroll/company-adjustment/company-adjustment.component';
import { CostCenterComponent } from './Company/cost-center/cost-center.component';
import { DepartmentComponent } from './Company/department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { CostCenterFormComponent } from './Company/cost-center-form/cost-center-form.component';
import { CompanyAdjustmentFormComponent } from './Payroll/company-adjustment-form/company-adjustment-form.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DepartmentFormComponent } from './Company/department-form/department-form.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { OtRatesComponent } from './Payroll/ot-rates/ot-rates.component';
import { PayGroupComponent } from './Company/pay-group/pay-group.component';
import { PayRollComponent } from './pay-roll/pay-roll.component';
import { PhilHealthComponent } from './Reference/phil-health/phil-health.component';
import { SSSComponent } from './Reference/sss/sss.component';
import { UserComponent } from './user/user.component';
import { BankComponent } from './Company/bank/bank.component';
import { GeneralLedgerFormComponent } from './general-ledger-form/general-ledger-form.component';
import { OtRatesFormComponent } from './Payroll/ot-rates-form/ot-rates-form.component';
import { PayGroupFormComponent } from './Company/pay-group-form/pay-group-form.component';
import { PayRollFormComponent } from './pay-roll-form/pay-roll-form.component';
import { PhillHealthFormComponent } from './Reference/phill-health-form/phill-health-form.component';
import { SSSFormComponent } from './Reference/sssform/sssform.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { GovernmentComponent } from './Reference/government/government.component';
import { TaxTableComponent } from './Reference/tax-table/tax-table.component';
import { BankFormComponent } from './Company/bank-form/bank-form.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CompanyProfileDashboardComponent } from './Company/company-profile-dashboard/company-profile-dashboard.component';

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
    GovernmentComponent,
    TaxTableComponent,
    BankFormComponent,
    LoginScreenComponent,
    CompanyProfileDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
