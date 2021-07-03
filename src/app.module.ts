import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {StudentModule} from './student/student.module'
import { DatabaseModule } from 'src/database/database.module';
import {ConfigModule} from '@nestjs/config';
@Module({
  imports: [
    StudentModule,
    ConfigModule.forRoot({isGlobal:true}),
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
