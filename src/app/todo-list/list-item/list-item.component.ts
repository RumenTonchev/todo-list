import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { TodoListService } from '../../todo-list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: ListItem;
  @Output() clickActive: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  constructor(
    private listService: TodoListService
  ) {
  }

  ngOnInit(): void {
  }

  activeClick(): void {
    this.clickActive.emit(!this.item.active);
  }

  openEdit(): void {
    this.listService.setEditedItem(this.item);
    // this.editItem.emit(this.item);
  }

}
