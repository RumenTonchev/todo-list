import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListItemComponent } from './todo-list/list-item/list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyListComponent } from './todo-list/modify-list/modify-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ListItemComponent,
    ModifyListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
