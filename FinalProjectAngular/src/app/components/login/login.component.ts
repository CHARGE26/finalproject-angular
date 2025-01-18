import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [HeaderComponent,ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm !: FormGroup;
  constructor(private fb:FormBuilder,private route:Router,private authServ:AuthService){}
  ngOnInit(){
    this.initForm();
  }
  initForm(){
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }
    loginProces(){
      if (this.loginForm.valid) {
        const logindata = this.loginForm.value
        const Storedusers = JSON.parse(localStorage.getItem('users')||'[]');
        
        const user  = Storedusers.find(
          (u : {email:string;password:string})=>
            u.email === logindata.email && u.password === logindata.password
        );
        if (user) {
          console.log('Login successful:', user);
          alert('Login successful!');
          this.route.navigate(['/homepage']);
        } else {
          console.error('Invalid email or password');
          alert('Invalid email or password. Please try again.');
          
        };
       
        this.authServ.login(this.loginForm.value).subscribe({
          next:(res)=>{
            console.log('login successful:',res); 
            localStorage.setItem('token',res.access_token) 
            this.route.navigate(['/homepage'])          
                this.authServ.getUsers().subscribe({
                  next:(res) =>{
                    console.log("fetched users",res);
                  },
                  error:(err) => console.error("fetch failed",err)
                });
          },
            error:(err) => console.error('login failed:' ,err)
        })
      }
  }
}
