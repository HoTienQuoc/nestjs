import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskList } from './task.model';

@Injectable()
export class TaskService {
    private tasks: Task[] = TaskList;
    getHello(): string {
        return 'Hello World!';
    }

    create(task: Task){
        const newTask = {
            ...task,
            id: this.tasks.length + 1
        }
        this.tasks.push(newTask);
    }

    findAll(){
        return this.tasks;
    }

    deleteTask(id: number){
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    updateTask(id: number, payload: Partial<Task>){
        const task = this.tasks.find((task) => task.id === id);
        if(!task){
            throw new NotFoundException('Task not found');
        }
        this.tasks = this.tasks.map((task) => {
            if(task.id === id){
                return {...task, ...payload};
            }
            return task;
        });
        return task.id;
    }
}
