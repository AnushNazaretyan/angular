import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  name: string = 'John';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    console.log(value)
  }

}
