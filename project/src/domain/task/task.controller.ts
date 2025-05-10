import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { CreateTaskDto } from './task.dto';

@Controller('api/v1/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @HttpCode(HttpStatus.OK)
    @Get()
    async findAll(): Promise<Task[]>{
        return this.taskService.findAll();
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async createTask(@Body() payload: CreateTaskDto){
        return this.taskService.create(payload);
    }

    @HttpCode(HttpStatus.OK)
    @Put(':id')
    async updateTask(@Param('id') id: number, @Body() payload: CreateTaskDto){
        return this.taskService.updateTask(id, payload);
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void>{
        return this.taskService.deleteTask(id);
    }
}
    
