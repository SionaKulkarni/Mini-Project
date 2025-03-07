import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [];
  private nextId = 1;

  getUsers(): Observable<User[]> {
    return of([...this.users]); // ✅ Return a copy of the array
  }

  addUser(user: User): Observable<User> {
    user.id = this.nextId++;
    this.users.push(user);
    return of(user);
  }

  deleteUser(userId: number): Observable<boolean> {
    console.log('Before delete:', this.users); // ✅ Debugging log

    const index = this.users.findIndex(user => user.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
      console.log('After delete:', this.users); // ✅ Debugging log
      return of(true);
    }

    return of(false);
  }
}
