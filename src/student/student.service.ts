import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getStudent() {
    return {id:"11",name:"Palm",level:'A'};
  }
  getHi(arg):string{
    const{id}=arg
    return "Hi "+id
  }
}
