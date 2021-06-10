import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email/email.component';
import { TemplateComponent } from './template/template.component';
import { NewEmailTemplateComponent } from './new-email-template/new-email-template.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../country.service';
import { MailChimpComponent } from './mail-chimp/mail-chimp.component';
import { TemplateListComponent } from './template-list/template-list.component';
@NgModule({
  declarations: [
    EmailComponent,
    TemplateComponent,
    NewEmailTemplateComponent,
    MailChimpComponent,
    TemplateListComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    CKEditorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CountryService],
})
export class EmailModule { }
