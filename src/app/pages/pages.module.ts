import { NgModule } from '@angular/core';
import {ThemeModule} from '../@theme/theme.module';
import {
    NbButtonModule, NbCheckboxModule, NbContextMenuModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbTabsetModule, NbUserModule,
} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import {TodoListComponent} from './todo-list/todo-list.component';
import {PagesComponent} from './pages.component';
import { TasksForDateComponent } from './todo-list/tasks-for-date/tasks-for-date.component';
import { CurrentDateComponent } from './todo-list/tasks-for-date/current-date/current-date.component';
import { TaskComponent } from './todo-list/tasks-for-date/task/task.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import { TaskAttachmentsComponent } from './todo-list/tasks-for-date/task/task-attachments/task-attachments.component';


@NgModule({
    imports: [
        ReactiveFormsModule,
        ThemeModule,
        NbLayoutModule,
        RouterModule,
        NbTabsetModule,
        NbInputModule,
        NbFormFieldModule,
        NbIconModule,
        NbButtonModule,
        FormsModule,
        NbCheckboxModule,
        NbContextMenuModule,
        AppModule,
        NbUserModule,
    ],
  declarations: [
    PagesComponent,
    TodoListComponent,
    TasksForDateComponent,
    CurrentDateComponent,
    TaskComponent,
    TaskAttachmentsComponent,
  ],
})
export class PagesModule { }
