import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentalComponent } from './experimental.component';
import { ExperimentalRoutingModule } from './experimental-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExperimentalComponent,
  ],
  imports: [
    CommonModule,
    ExperimentalRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ExperimentalModule { }
