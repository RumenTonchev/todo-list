import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ListItem } from './models/list-item';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  isOpen: BehaviorSubject<boolean>;
  editedItem: BehaviorSubject<ListItem>;

  constructor() {
    this.isOpen = new BehaviorSubject<boolean>(false);
    this.editedItem = new BehaviorSubject<ListItem>(null);
  }

  getEditedItem(): Observable<ListItem> {
    return this.editedItem.asObservable().pipe(
      filter(val => !!val)
    );
  }

  setEditedItem(item: ListItem): void {
    this.editedItem.next(item);
  }
}
