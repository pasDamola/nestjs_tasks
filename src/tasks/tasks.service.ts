import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ){}
    // getAllTasks(): Task[]{
    //     return this.tasks
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto){
    //     const {status, search} = filterDto;

    //     let tasks = this.getAllTasks();

    //     if (status){
    //         tasks = tasks.filter(task => task.status === status)
    //     }

    //     if(search){
    //         tasks = tasks.filter(task => 
    //             task.title.includes(search) || task.description.includes(search)
    //         );
    //     }

    //     return tasks;
    // }
      
    async getTaskById(id: number): Promise <Task> {
        const found = await this.taskRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Task with ${id} not found`);
        }
        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskRepository.createTask(createTaskDto);
    }
    
    //deleteTask with the remove method
    // async deleteTask(id: number): Promise<Task> {
    //     const found = this.getTaskById(id);
    //     if(!found){
    //         throw new NotFoundException(`Task with ${id} not found`);
    //     }

    //     (await found).remove();

    //     return found;
    // }


    //deleteTask with the delete method
    async deleteTask(id: number): Promise<void>{
        const result = await this.taskRepository.delete(id);
        if(result.affected === 0){
            throw new NotFoundException(`Task with ${id} not found`);
        }
    }

    // updateTask(id: string, status: TaskStatus): Task{
    //     const taskToUpdate = this.getTaskById(id);
    //     taskToUpdate.status = status
    //     return taskToUpdate;
    // }
}
