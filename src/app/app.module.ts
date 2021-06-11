import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StandCardComponent } from './standPages/stands/stand-card/stand-card.component';
import { AlertForAddStoreDepartmentComponent } from './storeDepartmentPages/store-department-add/alert-for-add-store-department/alert-for-add-store-department.component';
import { StoreDepatmentsComponent } from './storeDepartmentPages/store-depatments/store-depatments.component';
import { StoreDepartmentGetSchemeComponent } from './storeDepartmentPages/store-department-get-scheme/store-department-get-scheme.component';
import { StoreDepartmentChangeSchemeComponent } from './storeDepartmentPages/store-department-change-scheme/store-department-change-scheme.component';
import { StoreDepartmentAddComponent } from './storeDepartmentPages/store-department-add/store-department-add.component';
import { StandsComponent } from './standPages/stands/stands.component';
import { StandsChangeComponent } from './standPages/stands-change/stands-change.component';
import { StoreDepartmentCardComponent } from './storeDepartmentPages/store-depatments/store-department-card/store-department-card.component';
import { AlertComponent } from './alert/alert.component';
import { ModalDeleteComponent } from './storeDepartmentPages/store-depatments/modal-delete/modal-delete.component';
import { StandInputCardComponent } from './standPages/stands-change/stand-input-card/stand-input-card.component';
import { CellsComponent } from './cellPages/cells/cells.component';
import { CellCardComponent } from './cellPages/cells/cell-card/cell-card.component';
import { ParamInterceptor } from './api.interceptor';
import { AddStoreDepartmentService } from './storeDepartmentPages/Services/add-store-department.service';

@NgModule({
  declarations: [
    AppComponent,
    StoreDepatmentsComponent,
    StoreDepartmentGetSchemeComponent,
    StoreDepartmentChangeSchemeComponent,
    StoreDepartmentAddComponent,
    StandsComponent,
    StandsChangeComponent,
    AlertComponent,
    StoreDepartmentCardComponent,
    ModalDeleteComponent,
    StandInputCardComponent,
    AlertForAddStoreDepartmentComponent,
    StandCardComponent,
    CellsComponent,
    CellCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AddStoreDepartmentService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ParamInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
