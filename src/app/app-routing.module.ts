import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tdf', component: TdfComponent},
  { path: 'reactive', component: ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
