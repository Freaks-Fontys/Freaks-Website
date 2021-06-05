import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginMsg } from 'src/app/models/messages/user-login-msg';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.min(3)])
  });

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const msg = new UserLoginMsg(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);

    this.authService.login(msg)
      .subscribe(
        data => {
          this.router.navigateByUrl('/home');
        },
        error => {
          console.log(error);
        });
  }

}
