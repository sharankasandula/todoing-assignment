import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../../../services/tasks.service';
import {Subscription} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'ngx-tasks-for-date',
  templateUrl: './tasks-for-date.component.html',
  styleUrls: ['./tasks-for-date.component.scss'],
})
export class TasksForDateComponent implements OnInit {
  tasks: any;
  private newTask;
  private tasksDoc: AngularFirestoreCollection<unknown>;
  @Input() tabSelected: string;

  constructor(private tasksService: TasksService, private store: AngularFirestore) {
    this.tasksDoc = this.store.collection('tasks');
    this.tasks = this.tasksDoc.valueChanges({idField: 'taskId'});
  }

  ngOnInit(): void {
  }

  addNewTask() {
    this.newTask = {
      description: '',
      timeHours: '',
      timeMins: '',
      taskCreatedTimestamp: new Date(),
      taskFinished: false,
    };
    this.tasksService.createNewTask(this.newTask);
  }

}
