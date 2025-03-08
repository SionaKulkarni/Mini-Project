import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  imports: [NgFor, NgIf] // ✅ Import NgIf
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() deleteUser = new EventEmitter<number>(); // ✅ Emit delete event

  onDelete(userId: number): void {
    this.deleteUser.emit(userId); // ✅ Emit event to AppComponent
  }
}
