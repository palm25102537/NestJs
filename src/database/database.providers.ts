import {Sequelize} from 'sequelize-typescript'
import {Teacher} from './teacher.entity'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async ()=>{
      const sequelize = new Sequelize({
        dialect:'mysql',
        host:'localhost',
        port: 3306,
        username:'root',
        password:'admin1234',
        database:'teacher_nestjs'
      })
      sequelize.addModels([Teacher])
      await sequelize.sync()
      return sequelize
    }
  }
]