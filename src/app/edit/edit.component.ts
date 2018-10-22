import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import * as moment from 'moment';
// import {default as _rollupMoment} from 'moment';
// const moment = _rollupMoment || _moment;

import { List } from '../list-model';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input () id: string;
  @Output () isclose: EventEmitter<boolean> = new EventEmitter<boolean>();

  formGroup: FormGroup;
  isFavo = false;
  list = new List();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private listsService: ListsService,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      date: [''],
      comment: [''],
      completed: [''],
      favorite: ['']
    });
    this.formGroup.patchValue(this.list);
    if (!!this.id) {
      this.listsService.getlist(this.id).subscribe((list: List) => {
        this.formGroup.patchValue(list);
        this.list = list;
      });
    }
  }

  submit() {
    if (this.formGroup.valid) {
      this.formGroup.get('favorite').setValue(this.isFavo);
      if (!!this.formGroup.get('date').value) {
        const d = moment(this.formGroup.get('date').value).format('YYYY-MM-DD');
        this.formGroup.get('date').setValue(d);
      }
      const result = Object.assign({}, this.list, this.formGroup.value);
      if (!this.id) {
        this.listsService.add(result).subscribe((res: List) => {
          this.query();
        });
      } else {
        this.listsService.save(result).subscribe((res: List) => {
        // console.log(res);
          this.query();
        });
      }
    }
  }

  close() {
    this.isclose.emit(false);
  }

  favoToggle() {
  }

  private query() {
    window.location.reload();
  }
}
