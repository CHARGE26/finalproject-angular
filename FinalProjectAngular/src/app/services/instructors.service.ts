import { Injectable } from '@angular/core';
import { Instructor } from '../interface/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorsService {
instructors : Instructor[] = [
  {
    Id:1,
    name:"Ronald Richards",
    proffesion:"UI/UX Designer",
    rating:4.9,
    studcount:2400,
    img:"Rectangle1136.png"
  },
  {
    Id:1,
    name:"Ronald Richards",
    proffesion:"UI/UX Designer",
    rating:4.9,
    studcount:2400,
    img:"Rectangle1136.png"
  },
  {
    Id:1,
    name:"Ronald Richards",
    proffesion:"UI/UX Designer",
    rating:4.9,
    studcount:2400,
    img:"Rectangle1136.png"
  },
  {
    Id:1,
    name:"Ronald Richards",
    proffesion:"UI/UX Designer",
    rating:4.9,
    studcount:2400,
    img:"Rectangle1136.png"
  },
  {
    Id:1,
    name:"Ronald Richards",
    proffesion:"UI/UX Designer",
    rating:4.9,
    studcount:2400,
    img:"Rectangle1136.png"
  },
]
  constructor() { }
  getInstructors(){
    return this.instructors
  }
}
