import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateUserDto) {
    return this.prisma.users.create({ data: dto });
  }

  async getAllUsers() {
    return this.prisma.users.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  async getUserByEmail(email: string) {
    const u = await this.prisma.users.findUnique({ where: { email } });

    if (!u) {
      throw new BadRequestException('E-mail não encontrado.');
    }

    return u;
  }

  async updateUser(id: number, dto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { id },
      data: dto,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
