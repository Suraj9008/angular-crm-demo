import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailComponent } from './sendEmail/email.component';
import { TemplateComponent } from './template/template.component';
import { NewEmailTemplateComponent } from './new-email-template/new-email-template.component';
import { MailChimpComponent } from './mail-chimp/mail-chimp.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'email'
    },
    children: [
      {
        path: '',
        redirectTo: 'email'
      },
      {
        path: 'sendEmail',
        component: EmailComponent,
      },
      {
        path: 'new-email-template',
        component: NewEmailTemplateComponent,
        data: {
          title: 'new email template'
        }
      },
      {
        path: 'template',
        component: TemplateComponent
      },
      {
        path: 'mail-chimp',
        component: MailChimpComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
