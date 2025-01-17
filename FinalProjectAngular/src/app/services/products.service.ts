import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products :Product[]=[
  {
    ID: 1 ,
    title : "Beginner’s Guide to Design",
    instructor : " Ronald Richards",
    stats:"(1200 Ratings)",
    desc:"22 Total Hours. 155 Lectures. Beginner",
    price: 149.9,
    img:"Rectangle1080.png"
  },
  {
    ID: 2 ,
    title : "Beginner’s Guide to Design",
    instructor : " Ronald Richards",
    stats:"(1200 Ratings)",
    desc:"22 Total Hours. 155 Lectures. Beginner",
    price: 149.9,
    img:"Rectangle1080.png"
  },
  {
    ID: 3 ,
    title : "Beginner’s Guide to Design",
    instructor : " Ronald Richards",
    stats:"(1200 Ratings)",
    desc:"22 Total Hours. 155 Lectures. Beginner",
    price: 149.9,
    img:"Rectangle1080.png"
  },
  {
    ID: 4 ,
    title : "Beginner’s Guide to Design",
    instructor : " Ronald Richards",
    stats:"(1200 Ratings)",
    desc:"22 Total Hours. 155 Lectures. Beginner",
    price: 149.9,
    img:"Rectangle1080.png"
  },
  
]
  constructor() {}

  getProducts(){
    return this.products
  }
}
