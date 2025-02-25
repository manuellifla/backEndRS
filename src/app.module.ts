import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [ProductModule, CategoryModule],
  providers: [PrismaService],
})
export class AppModule {}
