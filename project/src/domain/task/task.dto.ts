import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({
        description: 'The name of the task',
        example: 'Task 1',
    })
    name: string;
    description: string;
    id: number;
}