import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

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

  constructor(protected router: Router, private auth: AngularFireAuth) {

  }

  login(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then((user) => {
        console.log(user);
        this.router.navigate(['']);
      });

    console.log(this.user);
  }


}
