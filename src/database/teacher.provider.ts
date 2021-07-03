import {Teacher} from './teacher.entity'

export const teacherProviders = [
  {
    provide:'Teacher_Repo',
    useValue:Teacher,
  }
]