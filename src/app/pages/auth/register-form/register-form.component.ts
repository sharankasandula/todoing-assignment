import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  constructor(private fbAuth: AngularFireAuth, private router: Router) { }

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;

  ngOnInit(): void {
  }

  register(): void {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.fbAuth.createUserWithEmailAndPassword(this.user.email, this.user.password)
      .then((user) => {
        console.log(user);
        this.router.navigate(['']);
      });
  }
}
