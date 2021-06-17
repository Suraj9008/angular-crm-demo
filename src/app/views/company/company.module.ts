import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ViewCompanyDetailsComponent } from './view-company-details/view-company-details.component';
import { DemoComponent } from './demo/demo.component';
import { NgSelect2Module } from 'ng-select2';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddCompanyComponent,
    CompanyListComponent,
    EditCompanyComponent,
    ViewCompanyDetailsComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    NgSelect2Module
  ],
})
export class CompanyModule { }
