import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreDepatmentsComponent } from './storeDepartmentPages/store-depatments/store-depatments.component';
import { StoreDepartmentGetSchemeComponent } from './storeDepartmentPages/store-department-get-scheme/store-department-get-scheme.component';
import { StoreDepartmentChangeSchemeComponent } from './storeDepartmentPages/store-department-change-scheme/store-department-change-scheme.component'
import { StoreDepartmentAddComponent } from './storeDepartmentPages/store-department-add/store-department-add.component';
import { StandsComponent } from './standPages/stands/stands.component';
import { StandsChangeComponent } from './standPages/stands-change/stands-change.component';
import { CellsComponent } from './cellPages/cells/cells.component';
const routes: Routes = [
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: 'app', component: StoreDepatmentsComponent },
    { path: 'store/:storeId/department/:departmentId', component: StoreDepartmentGetSchemeComponent },
    { path: 'changeScheme/store/:storeId/department/:departmentId', component: StoreDepartmentChangeSchemeComponent },
    { path: 'add', component: StoreDepartmentAddComponent },
    { path: 'stands/store/:storeId/department/:departmentId', component: StandsComponent },
    { path: 'stands/store/:storeId/department/:departmentId/change', component: StandsChangeComponent },
    { path: 'cells/stand/:standId', component: CellsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
