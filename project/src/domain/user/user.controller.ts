import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get("/list")
    getHello(): string {
        return this.userService.getHello();
    }
}