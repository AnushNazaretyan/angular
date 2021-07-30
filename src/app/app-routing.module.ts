import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentalRoutingModule } from './experimental/experimental-routing.module';

const routes: Routes = [
  {
    path: 'template-driven',
    loadChildren: () => import('./template-driven/template-driven.module').then(m => m.TemplateDrivenModule)
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'experimental',
    loadChildren: () => import('./experimental/experimental.module').then(m => m.ExperimentalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
