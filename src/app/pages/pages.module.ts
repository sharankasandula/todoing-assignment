import { NgModule } from '@angular/core';
import {ThemeModule} from '../@theme/theme.module';
import {NbLayoutModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {PagesComponent} from './pages.component';


@NgModule({
   imports: [
        ThemeModule,
        NbLayoutModule,
        RouterModule,
    ],
  declarations: [
    PagesComponent,
    TodoListComponent,
  ],
})
export class PagesModule { }
