import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model';
import { CreateTaskDto } from './task.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { ApiBearerAuth, ApiConsumes, ApiForbiddenResponse, ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('tasks api')
@UseGuards(AuthGuard)
@Controller('api/v1/tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @HttpCode(HttpStatus.OK)
    @ApiConsumes('application/json')
    @ApiNotFoundResponse({
        description: 'No tasks found',
    })
    @ApiForbiddenResponse({
        description: 'Forbidden',
    })
    @ApiNotFoundResponse({
        description: 'Not found',
    })
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
    
