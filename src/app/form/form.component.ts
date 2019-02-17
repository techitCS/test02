import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup:FormGroup;

  constructor(private formBuild:FormBuilder) { 
    
  }

  ngOnInit() {
    this.formGroup = this.formBuild.group({
      firstName:[''],
      lastName:[''],
      Email:[''],
      age:['']
    })
  }
  onSubmit(form: FormGroup){
    const{firstName,lastName,Email,age} = form.value;
    console.log(firstName,lastName,Email);
    const user = new User(firstName,lastName,Email,age);
    console.log(user);
  }

}
