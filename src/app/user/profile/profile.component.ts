import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    isEditMode: boolean = false;

    form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]), 
      email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]), 
      tel: new FormControl(''), 
    });

    toggleEditMode(){
      this.isEditMode = !this.isEditMode;
    }

    handleSaveProfile(){
      
    }
}
