import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../validators/city.validator';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.scss']
})
export class ExperimentalComponent implements OnInit {
  userForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(5)]],
    email: ['',Validators.email],
    address: this.fb.group({
      country: ['',[CustomValidators.forbiddenNameValidator(/test/gm)]],
      city: [''],
    }),
    cities:this.fb.array([
      this.fb.group({
        name:['Test']
      })
    ])
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.name?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((data)=>{
      this.userForm.get('address.city')?.patchValue(`${data} is city`)
    })
    console.log(this.userForm.valid);
  }

  get cities(){
    return this.userForm.get('cities') as FormArray;
  }
  get name(){
    return this.userForm.get('name')
  }

  newCity(opt={name:''}){
    return this.fb.group({
      name:[opt.name]
    })
  }
  addCity(){
    this.cities.push(this.newCity())
  }

  onSubmit(): void {
    if(this.name?.valid){
      this.name.patchValue(`${this.name.value}1`)
      console.log(this.userForm.value)
    }
  }
}
