import {Component} from '@angular/core';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <div class="companyLogo">
          <span class="pink">TODO</span>
          <span>ING!</span>
        </div>
      </nb-layout-header>
      <nb-layout-column>
        test
        <todo-list></todo-list>

        test
      </nb-layout-column>
    </nb-layout>

  `,
})
export class PagesComponent {

}
