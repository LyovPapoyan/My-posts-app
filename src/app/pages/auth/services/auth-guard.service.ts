import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class AuthGuard {
    
  constructor(private _authService: AuthService, public router: Router, private _message: NzMessageService) {}

  public canActivate(): boolean {
    if (!this._authService.isAuthenticated()) {
      this._message.error('Доступ запрещен, для доступа к странице постов требуется авторизация!')
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}
