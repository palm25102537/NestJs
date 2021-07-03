import { Injectable,Inject } from "@nestjs/common";
import {Teacher} from './teacher.entity'

@Injectable()
export class TeacherService{
  constructor(
    @Inject('Teacher_Repo')
    private teacherRepo:typeof Teacher
  ){}

  async findAll():Promise<Teacher[]>{
    return this.teacherRepo.findAll<Teacher>()
  }
}