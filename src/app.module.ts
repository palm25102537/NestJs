import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { TeacherController } from './teacher/teacher.controller';
import { StudentService } from './student/student.service';
@Module({
  imports: [],
  controllers: [StudentController,AppController, TeacherController],
  providers: [AppService,StudentService],
})
export class AppModule {}
