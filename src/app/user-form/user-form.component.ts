import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports: [NgFor, NgIf, FormsModule]
})
export class UserFormComponent {
  @Output() userAdded = new EventEmitter<void>(); // ✅ Notify parent on add
  user: User = { id: 0, name: '', email: '', phone: '' };

  constructor(private userService: UserService) {}

  saveUser(): void {
    if (this.user.name && this.user.email && this.user.phone) {
      this.userService.addUser(this.user).subscribe(() => {
        this.userAdded.emit(); // ✅ Emit event to parent component
        this.resetForm(); // ✅ Reset form after adding
      });
    }
  }

  resetForm(): void {
    this.user = { id: 0, name: '', email: '', phone: '' }; // ✅ Clear fields
  }
}
