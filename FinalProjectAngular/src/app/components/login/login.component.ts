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
      email:new FormControl ('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required, Validators.minLength(6)])
    });
  }
    loginProces(){
      if (this.loginForm.valid) {
        this.authServ.login(this.loginForm.value).subscribe(res=>{
          if (res) {
            console.log(res);
            alert(res.message);
            this.route.navigate(['/homepage'])
          }else{
            alert(res);
          }
        })
      }
  }
}
