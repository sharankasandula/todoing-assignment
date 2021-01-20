import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  private showErrors: boolean;


  ngOnInit(): void {
  }
  errors: string[] = [];
  backendError: string;
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;

  constructor(protected router: Router, private auth: AngularFireAuth) {

  }

  login(): void {
    this.showErrors = false;
    this.backendError = '';
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then((user) => {
        this.router.navigate(['']);
      }).catch(err => {
        this.backendError = err.message;
        this.showErrors = true;
      });

  }


}
