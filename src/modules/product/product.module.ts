import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService, PrismaService], // PrismaService adicionado aqui
})
export class ProductModule {}
