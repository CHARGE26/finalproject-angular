import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interface/product';
import { CommonModule } from '@angular/common';
import { InstructorsService } from '../../services/instructors.service';
import { Instructor } from '../../interface/instructor';
import { User } from '../../interface/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-homepage',
  imports: [HeaderComponent,FooterComponent , FormsModule , CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  products:Product[]=[]
  users :User[]=[]
  instructors : Instructor[]=[]
  constructor(private prodServ:ProductsService , private instrServ:InstructorsService , private userServ:UsersService){
    this.products = prodServ.getProducts();
    this.instructors = instrServ.getInstructors();
    this.users = userServ.getUsers();
  }

}
