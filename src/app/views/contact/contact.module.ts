import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { ViewContactDetailsComponent } from './view-contact-details/view-contact-details.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AddContactComponent,
    ContactListComponent,
    ViewContactDetailsComponent,
    EditContactComponent
  ],
  exports: 
  [ContactListComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MDBBootstrapModule
  ],
  bootstrap: [ContactListComponent]
})
export class ContactModule { }