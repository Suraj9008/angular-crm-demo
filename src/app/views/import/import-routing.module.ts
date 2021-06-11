import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportComponent } from './import/import.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'import'
    },
    children: [
      {
        path: '',
        redirectTo: 'import'
      },
      {
        path:'import',
        component: ImportComponent,
        data: {
          title: 'import-contact'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportRoutingModule { }
