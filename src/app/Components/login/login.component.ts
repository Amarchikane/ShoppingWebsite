import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   userLoginForm: FormGroup;
  isFormSubmitted: boolean = false;
  constructor(private router: Router) {
    this.userLoginForm = new FormGroup({
      userName: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(8)])
      })
  }
  onSubmit() {
    const isFormValid = this.userLoginForm.valid;

    console.log("isFormValid =" + this.userLoginForm.value)
    // for (const prop in this.userForm.value) {
    //   console.log(prop, this.userForm.value[prop]);
    // }
    if (isFormValid) {
      this.router.navigate(['/Home']);
    }
      this.isFormSubmitted = true;
  }
}
