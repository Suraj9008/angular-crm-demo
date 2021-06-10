import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { AddLoanComponent } from './add-loan/add-loan.component';


@NgModule({
  declarations: [
    AddLoanComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule
  ]
})
export class LoansModule { }
