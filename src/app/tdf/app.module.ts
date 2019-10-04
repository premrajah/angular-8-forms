import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { TdfComponent } from './tdf.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponent } from '../reactive/reactive.component';
import { HomeComponent } from '../home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    ReactiveComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
