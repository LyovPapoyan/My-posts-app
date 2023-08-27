import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IAuthForm } from 'src/app/interfaces/auth-form.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public passwordVisible: boolean = false;

  constructor(     
    private _authService: AuthService, 
    private _router: Router,
    private _message: NzMessageService) { }

   ngOnInit(): void {
    this.loginForm = new FormGroup<IAuthForm>({
      userName: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)]
      })
    })
  }

  public login(): void {
   const isLogged =  this._authService.isLoggedIn(this.loginForm.value)
    if (isLogged) {
      this._authService.setUserToLocalStorage(this.loginForm.value)
      this._router.navigateByUrl('posts')
    } else {
      this._message.error(`Введите правильные данные `)
    }
    
  }

}
