import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _authService: AuthService) { }

  get isAuthenticated() {
    return this._authService.isAuthenticated();
  }

  public logOut() {
    this._authService.logOut();
  }
  
}
