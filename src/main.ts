import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './app/components/user-form/user-form.component';
import { UserTableComponent } from './app/components/user-table/user-table.component';
import { UserService } from './app/services/user.service';
import { User } from './app/models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserFormComponent, UserTableComponent],
  template: `
    <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">
          User Management System
        </h1>

        <app-user-form
          [isEditing]="editIndex !== -1"
          [userData]="editIndex !== -1 ? users[editIndex] : null"
          (formSubmit)="handleFormSubmit($event)"
        ></app-user-form>

        <app-user-table
          *ngIf="users.length > 0"
          [users]="users"
          (onEdit)="handleEdit($event)"
          (onDelete)="handleDelete($event)"
        ></app-user-table>
      </div>
    </div>
  `,
})
export class App {
  users: User[] = [];
  editIndex: number = -1;

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  handleFormSubmit(userData: User) {
    if (this.editIndex === -1) {
      this.userService.addUser(userData);
    } else {
      this.userService.updateUser(this.editIndex, userData);
      this.editIndex = -1;
    }
  }

  handleEdit(index: number) {
    this.editIndex = index;
  }

  handleDelete(index: number) {
    this.userService.deleteUser(index);
  }
}

bootstrapApplication(App);
