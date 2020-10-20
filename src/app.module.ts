import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { BotService } from './bot/bot.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [
    TasksModule, 
    TypeOrmModule.forRoot(typeOrmConfig)],
    controllers: [AppController],
    providers: [BotService]
})
export class AppModule {}
