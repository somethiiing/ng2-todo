import { Component } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-container',
  styleUrls: ['./auth.component.css'],
  templateUrl: './auth.component.html'
})

export class Auth {
  user = {
    email: '',
    password: ''
  }

  mode: string = 'signin';
  linkText: string = 'Don\'t have an account?';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  changeMode() {
    if (this.mode === 'signin') {
      this.mode = 'signup';
      this.linkText = 'Already have an account?';
    } else {
      this.mode = 'signin';
      this.linkText = 'Don\'t have an account?';
    }
  }

  authenticate() {
    this.authService.authenticate(this.mode, this.user)
      .subscribe( () => this.router.navigate(['']));
  }


}
