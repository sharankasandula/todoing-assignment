import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TasksService} from '../../../../services/tasks.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'ngx-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @ViewChild('taskDescription') taskDescriptionRef: ElementRef;

  @Input() task: any;
  date: any = new Date();
  toggleTimePickerInput: boolean = false;
  attachments: any = [{title: 'Add media'}, {title: 'Add Link'}, {title: 'Add notes'}];
  showEditTaskIcons: boolean = false;
  taskForm: FormGroup;
  private state: string;
  private taskDoc: any;
  timeAssigned: boolean = false;


  constructor(private tasksService: TasksService,
              private fb: FormBuilder,
              private afs: AngularFirestore) {
  }


  ngOnInit(): void {

    this.taskDoc = this.afs.doc('task/' + this.task.taskId).valueChanges({id: 'taskId'});
    this.taskForm = this.fb.group({
      description: [this.task.description, [Validators.required]],
      timeHours: [this.task.taskHours, [Validators.max(24), , Validators.min(0)]],
      timeMins: [this.task.taskMins, [Validators.max(60), , Validators.min(0)]],
      taskCreatedTimestamp: [new Date()],
      taskUpdatedTimestamp: [new Date()],
      taskFinished: [this.task.finished],
    });

    if (this.taskForm.get('timeHours').value || this.taskForm.get('timeMins').value) {
      this.timeAssigned = true;
    }
  }


  toggleTimePicker() {
    this.toggleTimePickerInput = !this.toggleTimePickerInput;
  }

  deleteTask() {
    this.afs.doc('task/' + this.task.taskId).delete().then(res => {});
  }

  changeHandler(event: string) {
    this.state = event;
  }
}
