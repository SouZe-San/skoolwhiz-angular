import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">User Information Form</h2>
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="space-y-4">
        <div class="space-y-2">
          <label for="name" class="text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            id="name" 
            formControlName="name"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          <div *ngIf="userForm.get('name')?.errors?.['required'] && userForm.get('name')?.touched" 
               class="text-red-500 text-sm">
            Name is required
          </div>
        </div>

        <div class="space-y-2">
          <label for="phone" class="text-sm font-medium text-gray-700">Phone</label>
          <input 
            type="text" 
            id="phone" 
            formControlName="phone"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          <div *ngIf="userForm.get('phone')?.errors?.['required'] && userForm.get('phone')?.touched" 
               class="text-red-500 text-sm">
            Phone is required
          </div>
          <div *ngIf="userForm.get('phone')?.errors?.['pattern'] && userForm.get('phone')?.touched" 
               class="text-red-500 text-sm">
            Please enter a valid phone number
          </div>
        </div>

        <div class="space-y-2">
          <label for="idNumber" class="text-sm font-medium text-gray-700">ID Number</label>
          <input 
            type="text" 
            id="idNumber" 
            formControlName="idNumber"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          <div *ngIf="userForm.get('idNumber')?.errors?.['required'] && userForm.get('idNumber')?.touched" 
               class="text-red-500 text-sm">
            ID Number is required
          </div>
        </div>

        <div class="space-y-2">
          <label for="picture" class="text-sm font-medium text-gray-700">Picture</label>
          <input 
            type="file" 
            id="picture" 
            (change)="onFileSelected($event)" 
            accept="image/jpeg,image/jpg,image/png"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
          <div *ngIf="!isValidFile && userForm.get('picture')?.touched" 
               class="text-red-500 text-sm">
            Please select a valid image file (JPEG, JPG, or PNG)
          </div>
        </div>

        <button 
          type="submit" 
          [disabled]="!userForm.valid || !isValidFile"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isEditing ? 'Update' : 'Save' }}
        </button>
      </form>
    </div>
  `
})
export class UserFormComponent implements OnInit {
  @Input() isEditing = false;
  @Input() userData: User | null = null;
  @Output() formSubmit = new EventEmitter<User>();

  userForm: FormGroup;
  isValidFile = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      idNumber: ['', Validators.required],
      picture: ['']
    });
  }

  ngOnInit() {
    if (this.userData) {
      this.userForm.patchValue(this.userData);
      this.isValidFile = true;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      this.isValidFile = validTypes.includes(file.type);

      if (this.isValidFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.userForm.patchValue({
            picture: e.target.result
          });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit() {
    if (this.userForm.valid && this.isValidFile) {
      this.formSubmit.emit(this.userForm.value);
      this.userForm.reset();
      this.isValidFile = false;
    }
  }
}