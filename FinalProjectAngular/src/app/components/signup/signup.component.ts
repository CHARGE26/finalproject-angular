import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [HeaderComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!:FormGroup
 constructor(private fb:FormBuilder , private authServ:AuthService,private router:Router){
 }
 ngOnInit(){
  this.initForm();
}
initForm(){
  this.signupForm=this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
}
 onSubmit(){
  if (this.signupForm.valid) {
    const formData = this.signupForm.value;

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    console.log('User saved to localStorage:', formData);
    alert('User registered successfully!');
    this.router.navigate(['/login'])
  } else {
    alert('Please correct the errors in the form.');
    }
  }
}
 
