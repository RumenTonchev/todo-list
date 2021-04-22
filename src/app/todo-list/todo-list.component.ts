import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/list-item';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  list: ListItem[] = [];
  formGroup: FormGroup;

  constructor() {
    for (let i = 0; i < 2; i++) {
      this.list.push({
        id: i,
        name: `row ${i}`,
        description: `this is description of number ${i}`,
      });
    }
  }

  ngOnInit(): void {
  }

  onChangeActive(newValue, item: ListItem): void {
    this.list.forEach(obj => {
      if (obj.id !== item.id) {
        obj.active = false;
      }
    });
    item.active = newValue;
  }

  editItem(item?: ListItem): void {
    this.formGroup = new FormGroup({
      id: new FormControl(!!item ? item.id : null),
      name: new FormControl({
        value: !!item ? item.name : null,
        disabled: false
      }, [Validators.required, Validators.minLength(5)]),
      description: new FormControl({
        value: !!item ? item.name : null,
        disabled: false
      }, [Validators.required, Validators.minLength(5)]),
    });
  }

  cancelForm(): void {
    this.formGroup = null;
  }

  submitForm(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      const data = this.formGroup.getRawValue();
      if (data.id === null) {
        data.id = this.list.length;
        this.list.push(data);
      } else {
        const listIndex = this.list.findIndex(obj => obj.id === data.id);
        if (listIndex > -1) {
          this.list[listIndex] = data;
        }
      }
      this.cancelForm();
    }
  }

}
