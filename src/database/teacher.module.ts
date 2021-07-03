import {Module} from '@nestjs/common'
import {TeacherController} from './teacher.controller'
import { TeacherService } from './teacher.service'
import { teacherProviders } from './teacher.provider'


@Module({
 
  providers:[
    TeacherService,
    ...teacherProviders
  ],
  exports:[
    TeacherService
  ]
})

export class TeacherModule{}