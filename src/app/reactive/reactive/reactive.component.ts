import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl("Bob", [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')),
    address: new FormGroup({
      country: new FormControl(),
      city: new FormControl(),
    }),
    age: new FormControl(),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.userForm.value)
  }
}
