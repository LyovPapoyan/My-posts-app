import { FormControl } from "@angular/forms";

export interface IAuthForm {
    userName: FormControl<string>;
    password: FormControl<string>;
}