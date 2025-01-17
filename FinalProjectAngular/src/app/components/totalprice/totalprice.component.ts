import { ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../interface/product';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-totalprice',
  imports: [CommonModule,RouterLink],
  templateUrl: './totalprice.component.html',
  styleUrl: './totalprice.component.css'
})
export class TotalPriceComponent implements OnInit {
  subtotal: Product[] = [];
  total: number = 0;
  delfee:number = 15;
  constructor(
      private cartServ: CartService,
      private route:Router
    ) {}

  ngOnInit() {
    this.subtotal = this.cartServ.getCartItems();
    this.updateTotal();
  }
 
  updateTotal() {
    this.total = this.subtotal.reduce((sum, product) => sum + product.price, 0);
    this.subtotal = this.cartServ.getCartItems();
    return this.total
    console.log(this.total);
    
  }
  changePath(){
    this.route.navigate(['/homepage']);
  }
}
