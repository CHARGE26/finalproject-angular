import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
// import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"" , pathMatch:'full',redirectTo:'homepage'},
    {path:"homepage", component:HomepageComponent},
    {path:"cart" , component:CartComponent , },
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent}
];
