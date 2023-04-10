import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../Validator/ConfirmPasswprdValidation';
import { ForbiddenNameValidator } from '../Validator/UserNameValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  social = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'Friend', 'Other'];

  constructor(private FormBuilder: FormBuilder) { }

  registerForm = this.FormBuilder.group({
    Username: ['', [Validators.required, Validators.minLength(5), ForbiddenNameValidator(/admin/)]],
    email: ['',
      Validators.required,
      Validators.email,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
    ],
    password: [''],
    confirmPassword: [''],

  }, { validator: [ConfirmPasswordValidator] });
  get Username() {
    return this.registerForm.get('Username');
  }
  get email() {
    return this.registerForm.get('email');
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMatch: true });
    }
  }
}
