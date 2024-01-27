import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TaskService {
  private prisma = new PrismaClient();

  async findAll() {
    return this.prisma.task.findMany();
  }
}
