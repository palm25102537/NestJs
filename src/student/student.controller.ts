import { Controller,Get,Post,Req } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController { 
  constructor(private readonly studentService: StudentService) {}
@Post()
getHello(){
  return this.studentService.getStudent()
}
@Get()
getReq(@Req() req){
  return this.getHi(req.query)
}

getHi(arg):string{
  return this.studentService.getHi(arg)
}
}
