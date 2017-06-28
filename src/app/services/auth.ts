import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StoreService } from './store';
import { Store } from '../store';
import 'rxjs/Rx';

@Injectable()
export class AuthService implements CanActivate {

  JWT_KEY: string = 'notes_token';
  JWT: string = '';

  constructor(
    private router: Router,
    private storeHelper: StoreService,
    private store: Store
  ) {
    const token = window.localStorage.getItem(this.JWT_KEY);
  }

  isAuthorized(): boolean {
    return Boolean(this.JWT);
  }

  canActivate(): boolean {
    const canActivate = this.isAuthorized();
    this.onCanActivate(canActivate);
    return canActivate;
  }

  onCanActivate(canActivate: boolean) {
    if (!canActivate) {
      this.router.navigate(['', 'auth']);
    }
  }






}
