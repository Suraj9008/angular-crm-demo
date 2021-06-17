import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTermComponent } from './add-term/add-term.component';
import { SettingRoutingModule } from './setting-routing.module';
import { TermListComponent } from '../setting/term-list/term-list.component';

@NgModule({
  declarations: [AddTermComponent,TermListComponent],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
