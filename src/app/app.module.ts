import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreDepatmentsComponent } from './store-depatments/store-depatments.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDepartmentGetSchemeComponent } from './store-department-get-scheme/store-department-get-scheme.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreDepatmentsComponent,
    StoreDepartmentGetSchemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
