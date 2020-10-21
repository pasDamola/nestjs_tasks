import { Module } from '@nestjs/common';
import { TaskRepository } from 'src/tasks/task.repository';
import { TasksModule } from 'src/tasks/tasks.module';
import { BotService } from './bot.service';


@Module({
  imports: [TasksModule, TaskRepository],
  providers: [BotService],
  exports: [BotService],
})
export class BotModule {}