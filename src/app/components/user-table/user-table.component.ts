import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">User Data Table</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Number</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Picture</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let user of users; let i = index" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">{{user.name}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{user.phone}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{user.idNumber}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <img [src]="user.picture" class="h-10 w-10 rounded-full object-cover" alt="User picture">
              </td>
              <td class="px-6 py-4 whitespace-nowrap space-x-2">
                <button 
                  (click)="onEdit.emit(i)"
                  class="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Edit
                </button>
                <button 
                  (click)="onDelete.emit(i)"
                  class="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class UserTableComponent {
  @Input() users: User[] = [];
  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();
}