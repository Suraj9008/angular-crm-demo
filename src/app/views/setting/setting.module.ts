import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';

import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TexonomyService } from '../texonomy.service'
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SettingRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[TexonomyService],
  providers:[TexonomyService]
})
export class SettingModule { }
