import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { emailValidator } from '../../utils/email.validator';
import { matchPasswordValidator } from '../../utils/match-password.validator';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    form = new FormGroup({
      username: new FormControl('', [
        Validators.required, 
        Validators.minLength(5)
      ]),
      email: new FormControl('', [Validators.required, emailValidator(['bg', 'com'])]),
      tel: new FormControl(''),
      passGroup: new FormGroup({
        password: new FormControl('', [Validators.required]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [matchPasswordValidator('password', 'rePassword')],
      })
    });

    isFieldTextMissing(controlName: string) {
      return (
        this.form.get(controlName)?.touched
        && this.form.get(controlName)?.errors?.['required']
      );
    };

    get isEmailValid() {
      return (
        this.form.get('email')?.touched
        && this.form.get('email')?.errors?.['emailValidator']
      );
    }

    get passGroup(){
      return this.form.get('passGroup');
    }

    register() {
      console.log(this.form.invalid);
      if(this.form.invalid){
        return;
      }
      console.log(this.form.value);
    }
}
