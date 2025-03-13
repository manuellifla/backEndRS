import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: {
        name: createProductDto.name,
        description: createProductDto.description,
        price: createProductDto.price,
        url_photo: createProductDto.url_photo,
        stock: createProductDto.stock,
        categoryId: createProductDto.categoryId,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      select: {
        name: true,
        category: {
          select: {
            name: true,
          }
        },
        description: true,
        price: true,
        url_photo: true,
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      select: {
        name: true,
        category: {
          select: {
            name: true,
          }
        },
        description: true,
        price: true,
        url_photo: true,
      }
    });
  }

  async remove(id: number) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
