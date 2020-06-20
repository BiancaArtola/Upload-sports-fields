import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanchaComponent } from './cancha/cancha.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: 'cancha', component: CanchaComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: CanchaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
