import { Component } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [UserFormComponent, UserListComponent]
})
export class AppComponent {
  title = 'User Management';
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(userId: number): void {
    console.log('Deleting user with ID:', userId); // ✅ Debugging log

    this.userService.deleteUser(userId).subscribe((success) => {
      if (success) {
        this.loadUsers(); // ✅ Refresh list
      }
    });
  }
}
