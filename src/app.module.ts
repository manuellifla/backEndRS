import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { CartModule } from './modules/cart/cart.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ProductModule, CategoryModule, CartModule, UserModule],
  providers: [PrismaService],
  
})
export class AppModule {}
