import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  fromGroup:FormGroup;

  constructor(private formBuild:FormBuilder) { 
    
  }

  ngOnInit() {
    this.fromGroup = this.formBuild.group({
      firstName:[''],
      lastName:['']
    })
  }

}
