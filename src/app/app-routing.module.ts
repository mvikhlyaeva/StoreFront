import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreDepatmentsComponent } from './store-depatments/store-depatments.component';
import { StoreDepartmentGetSchemeComponent } from './store-department-get-scheme/store-department-get-scheme.component';

const routes: Routes = [
    {path: '', redirectTo: '/app', pathMatch: 'full' },
    {path: 'app', component: StoreDepatmentsComponent},
    {path: 'store/:storeId/department/:departmentId', component: StoreDepartmentGetSchemeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
