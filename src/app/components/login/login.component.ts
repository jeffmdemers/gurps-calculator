import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthorizeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isAuthorized()) {
      this.router.navigate(['characters']);
    } else {
      this.buildForm();
    }
  }

  get f() { return this.loginForm.controls; }

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

    this.authService.login(this.f.username.value, this.f.password.value)
      .subscribe(x => {
        localStorage.setItem('Authorization', x.toString());
        this.router.navigate(['characters']);
      });
  }
}
