import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface UserData {
  id: number;
  name: string;
  phone: string;
  idNumber: string;
  picture: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'skoolwhiz-angular';
  userForm: FormGroup;
  userData: UserData[] = [];
  editIndex: number = -1;
  isValidFile: boolean = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      idNumber: ['', Validators.required],
      picture: [''],
    });
  }

  ngOnInit() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      this.isValidFile = validTypes.includes(file.type);

      if (this.isValidFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.userForm.patchValue({
            picture: e.target.result,
          });
        };
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit() {
    if (this.userForm.valid && this.isValidFile) {
      const formData = this.userForm.value;

      if (this.editIndex === -1) {
        // Add new user
        this.userData.push({
          id: Date.now(),
          ...formData,
        });
      } else {
        // Update existing user
        this.userData[this.editIndex] = {
          ...this.userData[this.editIndex],
          ...formData,
        };
        this.editIndex = -1;
      }

      this.userForm.reset();
      this.isValidFile = false;
    }
  }

  editUser(index: number) {
    const user = this.userData[index];
    this.userForm.patchValue({
      name: user.name,
      phone: user.phone,
      idNumber: user.idNumber,
      picture: user.picture,
    });
    this.editIndex = index;
    this.isValidFile = true;
  }

  deleteUser(index: number) {
    this.userData.splice(index, 1);
  }
}
