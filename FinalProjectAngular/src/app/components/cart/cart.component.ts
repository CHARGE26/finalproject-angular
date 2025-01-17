import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interface/product';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { TotalPriceComponent } from '../totalprice/totalprice.component';

@Component({
  selector: 'app-cart',
  imports: [HeaderComponent,FooterComponent,TotalPriceComponent,CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems:Product[]=[];
  constructor(private cartServ:CartService){
    this.cartItems= cartServ.getCartItems();
  }
  removeItem(id:number): void{ 
    this.cartServ.removeItems(id)
    this.cartItems=this.cartServ.getCartItems();
  }
}
