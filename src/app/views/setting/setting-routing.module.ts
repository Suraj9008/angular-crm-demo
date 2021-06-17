import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermListComponent } from '../setting/term-list/term-list.component';
import { AddTermComponent } from './add-term/add-term.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'setting'
    },
    children: [
      {
        path: '',
        redirectTo: 'setting'
      },
      {
        path: 'term-list',
        component: TermListComponent,
        data: {
          title: 'term-list'
        }
      },
      {
        path: 'add-term',
        component: AddTermComponent,
        data: {
          title: 'add-term'
        }
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, TermListComponent]
})
export class SettingRoutingModule { }
