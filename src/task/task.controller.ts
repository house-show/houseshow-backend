import { Controller, Get, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(JwtAuthGuard) // Apply the guard here
  @Get()
  async getAll() {
    return this.taskService.findAll();
  }

  // other endpoints...
}
