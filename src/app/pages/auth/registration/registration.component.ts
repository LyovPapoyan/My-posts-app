import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IAuthForm } from 'src/app/interfaces/auth-form.interface';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;
  public passwordVisible: boolean = false;

  constructor(
    private _authService: AuthService, 
    private _router: Router,
    private _message: NzMessageService) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup<IAuthForm>({
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

  public onSubmit(): void {
    const users: any[] = this._authService.getUsersListFromLocalStorage() ? this._authService.getUsersListFromLocalStorage() : [];

    if (users.length) {
      const matchedUser = users.find(user => 
        user.userName === this.registrationForm.value.userName && 
        user.password === this.registrationForm.value.password
      );
    
      if (matchedUser) {
        this._message.error(`'${this.registrationForm.value.userName}' пользователь уже существует `)
        return;
      }
    }
    
      users.push(this.registrationForm.value);
      this._authService.setUsersListToLocalStorage(users);
      this._message.success('Вы успешно зарегистрировались')
      this._router.navigateByUrl('login');
  }
}
