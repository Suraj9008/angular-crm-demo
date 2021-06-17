import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTermComponent } from './add-term/add-term.component';
import { SettingRoutingModule } from './setting-routing.module';
import { TermListComponent } from '../setting/term-list/term-list.component';
import { TagsComponent } from './tags/tags.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TexonomyService } from './texonomy.service'
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [AddTermComponent,
    TermListComponent,
    TagsComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[TexonomyService]
})
export class SettingModule { }
