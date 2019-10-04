import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  { path: '', component: TdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
