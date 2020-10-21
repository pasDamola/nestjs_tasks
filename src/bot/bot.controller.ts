import { Get, Controller, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { BotService } from './bot.service';
import { Task } from '../tasks/task.entity';
import { TasksService } from 'src/tasks/tasks.service';


@Controller()
export class BotController {
  constructor(
      private botService: BotService,
      private taskService: TasksService
    ) {}

  @Get()
  getBotDialog(@Res() res) {
    this.botService.botMessage();
    res.status(HttpStatus.OK).send("Bot service started");
  }


}