import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(): Task[]{
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(createTaskDto: CreateTaskDto): Task{
        return this.tasksService.createTask(createTaskDto);
    }
}