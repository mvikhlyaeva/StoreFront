import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreDepatmentsComponent } from './store-depatments/store-depatments.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDepartmentGetSchemeComponent } from './store-department-get-scheme/store-department-get-scheme.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreDepatmentsComponent,
    StoreDepartmentGetSchemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
