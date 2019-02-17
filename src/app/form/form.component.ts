import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
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
      firstName:['',[Validators.required,Validators.minLength(2)]],
      lastName:['',[Validators.required,Validators.minLength(2)]],
      Email:['',[Validators.email]],
      age:['',[Validators.min(0),Validators.max(99)]]
    })
  }
  EmailValidator(control:AbstractControl){
    const value = control.value;
    if(value && value.includes('@')){
      return null;
    }
    return{
      Email:true
    }

  }
  onSubmit(form: FormGroup){
    console.log(form.invalid);
    console.log((<FormControl>form.get('firstName')).errors)
    console.log((<FormControl>form.get('lastName')).errors)
    console.log((<FormControl>form.get('Email')).errors)
    console.log((<FormControl>form.get('age')).errors)
    if(form.invalid){
      /*const{firstName,lastName,Email,age} = form.value;
      console.log(firstName,lastName,Email);
      const user = new User(firstName,lastName,Email,age);
      console.log(user);
      */
    }else{
      ['firstName','lastName','age','email'].forEach((key:string)=>{
        console.log(form.get(key).touched);
        form.get(key).markAsTouched();
        console.log(form.get(key).touched);
      })
    }
    
  }

}
