import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterMsg } from 'src/app/models/messages/user-register-msg';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.min(3)])
  });

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const msg = new UserRegisterMsg(
      this.registerForm.get('username')?.value,
      this.registerForm.get('email')?.value,
      this.registerForm.get('password')?.value
    );

    this.authService.register(msg)
      .then(
        data => {
          this.router.navigateByUrl('/login');
        },
        error => {
          console.log(error);
        }
      );
  }
}
