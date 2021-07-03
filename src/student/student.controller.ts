import { Controller,Get,Post,Put,Req,Param,Delete, HttpCode } from '@nestjs/common';
import { StudentService } from './student.service';
import {Request} from 'express'
@Controller('student')
export class StudentController { 
  constructor(private readonly studentService: StudentService) {}
// @Post()
// getHello(){
//   return this.studentService.getStudent()
// }
// @Get()
// getReq(@Req() req){
//   return this.getHi(req.query)
// }

// getHi(arg):string{
//   return this.studentService.getHi(arg)
// }
@Get()
getAllStudent():Promise<string>{
  return this.studentService.getStudent()
}

@Get(':id')
getStudentById(@Param() param){
  return this.studentService.getStudentById(param.id)
}

@Put(':id')
editStudent(@Req() req:Request, @Param() param){
  return this.studentService.editStudent(req.body, param.id)
}
@Post()
createNewStudent(@Req() req:Request){
  return this.studentService.createStudent(req.body)
}
@Delete(':id')
deleteStudent(@Param() param){
  return this.studentService.deleteStudent(param.id)
}
}
