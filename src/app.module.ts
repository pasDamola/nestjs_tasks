import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotController } from './bot/bot.controller';
import { BotService } from './bot/bot.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TaskRepository } from './tasks/task.repository';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';


@Module({
  imports: [
    TasksModule, 
    TypeOrmModule.forRoot(typeOrmConfig)],
    controllers: [BotController],
    providers: [BotService]
})
export class AppModule {}
