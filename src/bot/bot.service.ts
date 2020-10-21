import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { TaskRepository } from 'src/tasks/task.repository';
import { TasksService } from 'src/tasks/tasks.service';
import { Task } from '../tasks/task.entity';

@Injectable()
export class BotService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
        private tasksService: TasksService,
    ) {  }

    botMessage() {        
        const TelegramBot = require('node-telegram-bot-api');
        
        const token = '1345997928:AAHuHOKWIkoM-jk6wugma1ktXQo8rDrukTc';
        
        const bot = new TelegramBot(token, { polling: true });
    
        bot.on('message', (msg) => {
            let Hi = "hi";
            if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
                bot.sendMessage(msg.from.id, "Hello " + msg.from.first_name + " what would you like to know about me ?");
            }
        })
    }


    // async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
    //     const TelegramBot = require('node-telegram-bot-api');
        
    //     const token = '1345997928:AAHuHOKWIkoM-jk6wugma1ktXQo8rDrukTc';
        
    //     const bot = new TelegramBot(token, { polling: true });

    //     bot.on('message', (msg) => {
    //         if (msg.text.toString().toLowerCase().includes('create') && msg.text.toString().toLowerCase().includes('task') ) {
    //             bot.sendMessage(msg.from.id, `Hello ${msg.from.first_name} the instruction ${msg.text.toString().toUpperCase()} has been carried out`);
    //         }
    //     })

    //     return this.taskRepository.createTask(createTaskDto);
    // }

 

}