import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TemplateDrivenComponent,
  ],
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule,
    FormsModule,
  ]
})
export class TemplateDrivenModule { }
