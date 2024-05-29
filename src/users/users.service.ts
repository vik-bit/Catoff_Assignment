// users.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async findById(id: number): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async create(user: User): Promise<User> {
    return prisma.user.create({
      data: user,
    });
  }

  async update(id: number, user: User): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: user,
    });
  }

  async delete(id: number): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  }
}
