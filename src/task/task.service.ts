import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { TaskDTO } from 'src/dto/task.dto';
import { Task, TaskStatus } from 'src/entity/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}

    public async getOne(taskId: number) {
        const task: Task = await this.taskRepository.findOne(taskId);

        if(!task) {
            throw new NotFoundException(`Task with id ${taskId} was not found`);
        }

        const taskDTO: TaskDTO = this.entityToDTO(task);

        return taskDTO;
    }

    public async createOne(createTaskRequest: CreateTaskDTO) {
        const task: Task = new Task();
        task.title = createTaskRequest.title;
        task.description = createTaskRequest.description;
        task.status = TaskStatus.Created;

        await this.taskRepository.save(task);

        const taskDTO = this.entityToDTO(task);

        return taskDTO;
    }

    private entityToDTO(task: Task): TaskDTO {
        const taskDTO = new TaskDTO();
        taskDTO.id = task.id;
        taskDTO.title = task.title;
        task.description = task.description;
        taskDTO.status = task.status;

        return taskDTO;
    }

    public async getAll() {
        const tasks: Task[] = await this.taskRepository.find();

        const tasksDTO: TaskDTO[] = tasks.map(x => this.entityToDTO(x));

        return tasksDTO;
    }

    public async updateOne(taskId: number, updateTaskRequest: any) {
        const task: Task = await this.getOne(taskId);
        if(updateTaskRequest.title) task.title = updateTaskRequest.title;
        if(updateTaskRequest.description) task.description = updateTaskRequest.description;
        if(updateTaskRequest.status) task.status = updateTaskRequest.status;

        await this.taskRepository.save(task);

        const taskDTO: TaskDTO = this.entityToDTO(task);

        return taskDTO;
    }

    public async deleteOne(taskId: number) {
        const task: Task = await this.getOne(taskId);
        await this.taskRepository.remove(task);
    }
}
