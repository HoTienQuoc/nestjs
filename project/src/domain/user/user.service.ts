import { Injectable } from '@nestjs/common';
import { TaskService } from '../task/task.service';
@Injectable()
export class UserService {
    constructor(private readonly taskService: TaskService) {}
    getHello(): string {
        return 'Hello World!';
    }
}
