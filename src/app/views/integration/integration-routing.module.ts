import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailIntegrationComponent } from './mail-integration/mail-integration.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'integration'
    },
    children: [
      {
        path: '',
        redirectTo: 'integration'
      },
      {
        path:'mail-integration',
        component: MailIntegrationComponent,
        data: {
          title: 'mail-integration'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
