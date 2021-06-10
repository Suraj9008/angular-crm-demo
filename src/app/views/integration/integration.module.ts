import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationRoutingModule } from './integration-routing.module';
import { MailIntegrationComponent } from './mail-integration/mail-integration.component';


@NgModule({
  declarations: [
    MailIntegrationComponent
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule
  ]
})
export class IntegrationModule { }
