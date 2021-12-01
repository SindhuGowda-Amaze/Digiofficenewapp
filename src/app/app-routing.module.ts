import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarComponent } from 'src/pages/sidebar/sidebar.component';

const routes: Routes = [

  { path: "", redirectTo: "Login", pathMatch: "full" },
  {
    path: "Sidebar", component: SidebarComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
