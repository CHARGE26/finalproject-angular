import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];

  addToCart(product: Product): void {
    const exitprod = this.cartItems.filter(item => item.ID !== product.ID)
      this.cartItems.push(product);
      console.log('Current cart items:', this.cartItems);
  }
  getCartItems(){
     return this.cartItems;
  }

  removeItems(id:number){
    this.cartItems =this.cartItems.filter(item => item.ID !== id);
    return this.cartItems
  }

  constructor() { }
  
}
