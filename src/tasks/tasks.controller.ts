import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation-pipe';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './task-status.enum';
import { BotService } from 'src/bot/bot.service';




@Controller('tasks')
export class TasksController {
    constructor(
        private tasksService: TasksService,
        private botService: BotService
        ){}

    @Get()
    getBotDialog() {
        this.botService.botMessage();
    }
    @Get()
    getTask(@Query(ValidationPipe) filterDto: GetTasksFilterDto){
         return this.tasksService.getTasks(filterDto);    
    }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task>{
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task>{
        return this.tasksService.createTask(createTaskDto);
    }

    @Patch('/:id/status')
    updateTask(@Param('id', ParseIntPipe) id: number, @Body('status', TaskStatusValidationPipe) status: TaskStatus): Promise<Task>{
        return this.tasksService.updateTaskStatus(id, status)
    }

    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void>{
        return this.tasksService.deleteTask(id);
    }
}
