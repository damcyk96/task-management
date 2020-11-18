import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {

    constructor(private readonly taskService: TaskService) {}

    @Get()
    public async getAll() {
        const resp = await this.taskService.getAll();

        return resp;
    }

    @Get("/:id")
    public async getOne(@Param("id") taskId: number) {
        const resp = await this.taskService.getOne(taskId);

        return resp;
    }

    @Post()
    public async createOne(@Body() createTaskRequest: CreateTaskDTO) {
        const resp = await this.taskService.createOne(createTaskRequest);

        return resp;

    }
}
