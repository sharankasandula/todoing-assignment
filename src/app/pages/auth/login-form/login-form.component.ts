import { Component, OnInit } from '@angular/core';
import {NbAuthService} from '@nebular/auth';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {


  ngOnInit(): void {
  }
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  rememberMe = false;
  loginForm: FormGroup;

  constructor(protected service: NbAuthService,
              protected router: Router) {

  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    console.log("working");
  }


}
