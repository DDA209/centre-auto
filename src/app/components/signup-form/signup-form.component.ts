import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  user!: User;
  signupForm!: FormGroup;
  errorMsg: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.user = new User('', '', '', '');
  }

  ngOnInit(): void {
    this._initForm();
  }

  onSubmitSignup(): void {
    console.log(' user >>>', this.user);
    this.errorMsg = '';

    this.authService
      .signUp(this.user)
      .then((): void => {
        this.router.navigate(['/dashboard']);
      })
      .catch((errMsg: any): void => {
        this.errorMsg = errMsg;
        console.log(' errMsg >>>', errMsg);
      });
  }

  _initForm(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
