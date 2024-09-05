import { Component, Output, EventEmitter } from '@angular/core';

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @Output() select = new EventEmitter<string>();

  users = DUMMY_USERS;
  selectUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectUserId)!;
  }

  onSelectUser(id: string) {
    this.selectUserId = id;
  }
}
