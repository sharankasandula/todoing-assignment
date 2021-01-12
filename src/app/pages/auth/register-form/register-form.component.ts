import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }

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

    console.log("working");
  }


}
