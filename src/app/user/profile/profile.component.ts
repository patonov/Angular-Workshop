import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValidator } from '../../utils/email.validator';
import { DOMAINS } from '../../constants';
import { ProfileDetails } from '../../types/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    isEditMode: boolean = false;

    profileDetails: ProfileDetails = {
      username: 'John',
      email: 'john1234@gmail.com',
      tel: '123-123-123'
    };

    form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]), 
      email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]), 
      tel: new FormControl(''), 
    });

    toggleEditMode(){
      this.isEditMode = !this.isEditMode;
    }

    handleSaveProfile(){
      if(this.form.invalid){
        return;
      }     

      this.profileDetails = this.form.value as ProfileDetails;
      this.toggleEditMode();
    }
}
