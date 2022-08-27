import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent implements OnInit {
  email!: string;
  password!: string;
  errorMsg!: string;
  signinForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._initForm();
  }

  _initForm(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmitSignin() {
    this.errorMsg = '';

    this.authService
      .signIn(this.email, this.password)
      .then((): void => {
        this.router.navigate(['/dashboard']);
      })
      .catch((errMsg: any): void => {
        this.errorMsg = errMsg;
        console.log(' errMsg >>>', errMsg);
      });
  }
}
