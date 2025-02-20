import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = new BehaviorSubject<User[]>([]);

  getUsers(): Observable<User[]> {
    return this.users.asObservable();
  }

  addUser(user: User): void {
    const currentUsers = this.users.value;
    this.users.next([...currentUsers, { ...user, id: Date.now() }]);
  }

  updateUser(index: number, user: User): void {
    const currentUsers = this.users.value;
    currentUsers[index] = user;
    this.users.next([...currentUsers]);
  }

  deleteUser(index: number): void {
    const currentUsers = this.users.value;
    currentUsers.splice(index, 1);
    this.users.next([...currentUsers]);
  }
}