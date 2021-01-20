import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable, Subscription} from 'rxjs';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-task-attachments',
  templateUrl: './task-attachments.component.html',
  styleUrls: ['./task-attachments.component.scss'],
})
export class TaskAttachmentsComponent implements OnInit {

  @Input() taskId: string;
  @ViewChild('linkInput') linkInput;
  private tasksAttachmentsDoc: AngularFirestoreCollection<unknown>;
  attachments: any;
  private attachments$: Subscription;
  attachmentsForm: FormGroup;
  state: string;
  items: FormArray;

  constructor(private store: AngularFirestore, private fb: FormBuilder) {

    this.attachmentsForm = this.fb.group({
      taskLinks: this.fb.array(['']),
      taskFiles: this.fb.array(['']),
      taskNotes: [''],
    });
  }

  ngOnInit(): void {

    this.tasksAttachmentsDoc = this.store.collection('tasks/' + this.taskId + '/attachments');
    this.attachments$ = this.tasksAttachmentsDoc.valueChanges({idField: 'attachmentId'})
      .subscribe((attachments) => {
        if (attachments.length <= 0) return;
        this.attachments = attachments[0];
        this.patchRestFormControls();
        this.attachmentsForm.get('taskLinks').setValue(this.attachments.taskLinks);
        this.attachmentsForm.get('taskFiles').setValue(this.attachments.taskFiles);
        this.attachmentsForm.get('taskNotes').setValue(this.attachments.taskNotes);
      });
  }


  changeHandler(event: string) {
    this.state = event;
  }


  addLink(link) {
    if (!link) return;
    const linksArray = this.attachmentsForm.controls['taskLinks'] as FormArray;
    const newLink: FormControl = this.fb.control('');
    newLink.patchValue(link);
    linksArray.insert(linksArray.length, newLink);
    this.linkInput.value = '';
  }

  private patchRestFormControls() {
    const linksArray = this.attachmentsForm.controls['taskLinks'] as FormArray;
    if (this.attachments.taskLinks.length > 1 && (this.attachments.taskLinks !== linksArray.length)) {
      for (let i = 0; i < this.attachments.taskLinks.length - 1; i++) {
        const newLink: FormControl = this.fb.control('');
        linksArray.insert(linksArray.length, newLink);
      }
    }

  }
}
