import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperimentalComponent } from './experimental.component';

const routes: Routes = [
  {
    path: '',
    component: ExperimentalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperimentalRoutingModule { }
