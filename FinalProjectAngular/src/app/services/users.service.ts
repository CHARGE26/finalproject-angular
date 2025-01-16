import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
users : User[]=[
  {
    Id:1,
    username:"Jane Doe",
    proffesion:"designer",
    desc: "Byway's tech courses are top-notch! As someone , who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ",
    img:"Ellipse61.png",
  },
  {
    Id:1,
    username:"Jane Doe",
    proffesion:"designer",
    desc: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ",
    img:"Ellipse61.png",
  },
  {
    Id:1,
    username:"Jane Doe",
    proffesion:"designer",
    desc: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ",
    img:"Ellipse61.png",
  }
]
  constructor() { }
  getUsers(){
    return this.users
  }
}
