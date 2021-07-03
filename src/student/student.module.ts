import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
//route เก็บว่าตัวมันมีอะไรบ้าง
@Module({
  imports: [],
  controllers: [ StudentController],
  providers: [StudentService],
})
export class StudentModule {}