import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed class="d-flex justify-content-between">
        <a href="">
          <div class="companyLogo">
            <span class="pink">TODO</span>
            <span>ING!</span>
          </div>
        </a>
        <div class="user-section d-flex ">
          <div class="user-name">
            <p class="mb-0">{{user}}</p>
            <a href="" (click)="onLogout()" class="logout-btn">LOGOUT</a>
          </div>
          <div class="user-profile-photo"></div>
        </div>
      </nb-layout-header>
      <nb-layout-column>
        <ngx-todo-list></ngx-todo-list>
      </nb-layout-column>
    </nb-layout>

  `,
})
export class PagesComponent {
  items = [
    {title: 'Profile'},
    {title: 'Logout'},
  ];
  user: any = 'Kartik Singhal';

  constructor(private fbAuth: AngularFireAuth) {
  }


  onLogout() {
    this.fbAuth.signOut();
  }
}
