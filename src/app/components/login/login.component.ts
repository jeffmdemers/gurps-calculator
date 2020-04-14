import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/services/authorize.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthorizeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {

      this.buildForm();

  }

  get f() {
    return this.loginForm.controls;
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService
      .login(this.f.username.value, this.f.password.value)
      .subscribe(() => {
        this.router.navigate(['characters']);
      });
  }
}
