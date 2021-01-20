import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'ngx-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  private query: {};
  private tasksDoc: AngularFirestoreCollection<unknown>;
  private tasks: Observable<any>;
  tabSelected: string;

  constructor(private store: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  getTasks(customQuery): void {
    if (customQuery)
      this.tasksDoc = this.store.collection('tasks', customQuery());
    else
      this.tasksDoc = this.store.collection('tasks');
    this.tasks = this.tasksDoc.valueChanges({idField: 'taskId'});
  }

  tabChanged(tab: string) {
    this.tabSelected = tab;
    if (tab === 'All') {
      this.query = null;

    } else if (tab === 'Today') {
      this.tasksDoc = this.store.collection('tasks', (ref) => ref.where('taskCreatedTimestamp', '==', new Date()));
      this.tasks = this.tasksDoc.valueChanges({idField: 'taskId'});

    } else if (tab === 'This week') {
      const week = this.getWeekStartAndEndDates();
      this.query = (ref) => {
        ref.where('taskCreatedTimestamp', '>', week.start)
          .where('taskCreatedTimestamp', '<', week.end);
      };
    } else if (tab === 'This month') {
      this.query = tab;
    }
    this.getTasks(this.query);

  }

  private getWeekStartAndEndDates() {
    const today = new Date;
    const first = today.getDate() - today.getDay();
    const last = first + 6;
    const start = new Date(today.setDate(first));
    const end = new Date(today.setDate(last));
    return {start, end};
  }
}
