import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { TodoListService } from '../../todo-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modify-list',
  templateUrl: './modify-list.component.html',
  styleUrls: ['./modify-list.component.css']
})
export class ModifyListComponent implements OnInit, OnDestroy {

  item: ListItem;
  subscription: Subscription;

  constructor(
    private listService: TodoListService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.listService.getEditedItem().subscribe(item => {
      this.item = item;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
