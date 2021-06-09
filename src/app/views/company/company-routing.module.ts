import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewContactDetailsComponent } from '../contact/view-contact-details/view-contact-details.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ViewCompanyDetailsComponent } from './view-company-details/view-company-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'company'
    },
    children: [
      {
        path: '',
        redirectTo: 'company'
      },
      {
        path:'add-company',
        component: AddCompanyComponent,
      },
      {
        path:'company-list',
        component: CompanyListComponent,
      },
      {
        path:'edit-company',
        component: EditCompanyComponent,
      },
      {
        path:'view-company-details',
        component: ViewCompanyDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
