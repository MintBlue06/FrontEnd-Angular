import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  form:FormGroup;

  constructor( private formBuilder:FormBuilder ) {

    this.form=this.formBuilder.group({
      password:['', [Validators.required, Validators.minLength(8)]],
      user:['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
      //aqui va un token
    })
  }

  onSend(event:Event){
    event.preventDefault;

    if (this.form.valid){

    }else{
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(){}

  get User(){
    return this.form.get('user');
  }

  get Password(){
    return this.form.get('password');
  }

}

//4) pag62
