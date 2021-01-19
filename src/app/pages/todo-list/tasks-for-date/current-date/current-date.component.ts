import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-current-date',
  templateUrl: './current-date.component.html',
  styleUrls: ['./current-date.component.scss'],
})
export class CurrentDateComponent implements OnInit {

  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  getDate() {

  }
}
