import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationRoutingModule } from './integration-routing.module';
import { MailIntegrationComponent } from './mail-integration/mail-integration.component';
import { SmsIntegrationComponent } from './sms-integration/sms-integration.component';

@NgModule({
  declarations: [
    MailIntegrationComponent,
    SmsIntegrationComponent
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule
  ]
})
export class IntegrationModule { }
