import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from '../pages/sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { AdolfoComponent } from './adolfo/adolfo.component';
import { CompanyprofileComponent } from './companyprofile/companyprofile.component';
import { HelpComponent } from './help/help.component';
import { SproutPayrollComponent } from './sprout-payroll/sprout-payroll.component';
import { AdjustmentFormComponent } from './adjustment-form/adjustment-form.component';

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
    AdjustmentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
