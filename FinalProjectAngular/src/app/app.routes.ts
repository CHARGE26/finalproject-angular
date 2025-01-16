import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

export const routes: Routes = [
    {path:"" , pathMatch:'full',redirectTo:'homepage'},
    {path:"homepage", component:HomepageComponent},
];
