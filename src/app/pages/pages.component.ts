import {Component} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-header></nb-layout-header>
      <nb-layout-footer></nb-layout-footer>
      <nb-layout-column></nb-layout-column>
      <nb-sidebar></nb-sidebar>
    </nb-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
