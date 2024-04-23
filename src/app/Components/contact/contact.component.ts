import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private router: Router) {
    this.userForm =  new FormGroup({
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required,Validators.minLength(4)]),
      userName:  new FormControl("",[Validators.required,Validators.email]),
      city: new FormControl("", [Validators.required, Validators.minLength(2)]),
      PhoneNumber: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      message: new FormControl("",[Validators.required]),
      state: new FormControl("",[Validators.required]),
      zipcode: new FormControl("",[Validators.required]),
      isAgree: new FormControl("",[Validators.required])
    })
  }

  onSubmit() {
    const isFormValid = this.userForm.valid;

    console.log("isFormValid =" + this.userForm.value)
    // for (const prop in this.userForm.value) {
    //   console.log(prop, this.userForm.value[prop]);
    // }
    if (isFormValid) {
      this.router.navigate(['/login']);
    }
      this.isFormSubmitted = true;
  }
}
