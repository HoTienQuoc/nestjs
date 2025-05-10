export interface Task {
    name: string;
    description: string;
    id: number;
}

export const TaskList: Task[] = [
    {
        name: 'Task 1',
        description: 'Description 1',
        id: 1,
    },
    {
        name: 'Task 2',
        description: 'Description 2',
        id: 2,
    },
    {
        name: 'Task 3',
        description: 'Description 3',
        id: 3,
    },
];
