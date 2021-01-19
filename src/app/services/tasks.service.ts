import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: any;
  private tasksDoc: AngularFirestoreCollection<unknown>;

  constructor(private fb: AngularFirestore) {
    this.tasksDoc = this.fb.collection('tasks');
    // this.tasks = this.tasksDoc.valueChanges({idField: 'taskId'});
  }

  createNewTask(task) {
    this.tasksDoc.add(task).then((res) => {});
  }
}
