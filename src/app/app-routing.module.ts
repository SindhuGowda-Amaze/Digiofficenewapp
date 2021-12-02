import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from 'src/pages/sidebar/sidebar.component';
import{AdjustmentComponent} from 'src/app/adjustment/adjustment.component';

const routes: Routes = [

  // { path: "", redirectTo: "Login", pathMatch: "full" },
  { path: "", redirectTo: "Adjustment", pathMatch: "full" }, 

  {
    path: "Sidebar", component: SidebarComponent
  },
  
  {path:"Adjustment",component:AdjustmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
