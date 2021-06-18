import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingModule } from './setting.module';
const routes: Routes = [
      {
        path: 'texonomy',
        loadChildren: () => import('./texonomy/texonomy.module').then(m => m.TexonomyModule)
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
