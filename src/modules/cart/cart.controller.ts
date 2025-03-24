import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddItemDto, UpdateItemDto } from './dto/cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':userId')
  createCart(@Param('userId') userId: number) {
    return this.cartService.createCart(+userId);
  }

  @Post(':cartId/item')
  addItem(@Param('cartId') cartId: number, @Body() dto: AddItemDto) {
    return this.cartService.addItem(+cartId, dto);
  }

  @Patch(':cartId/item')
  updateItem(@Param('cartId') cartId: number, @Body() dto: UpdateItemDto) {
    return this.cartService.updateItem(+cartId, dto);
  }

  @Delete(':cartId/item/:productId')
  removeItem(
    @Param('cartId') cartId: number,
    @Param('productId') productId: number,
  ) {
    return this.cartService.removeItem(+cartId, +productId);
  }

  @Post(':cartId/checkout')
  checkout(@Param('cartId') cartId: number) {
    return this.cartService.checkout(+cartId);
  }

  @Get(':userId')
  getCart(@Param('userId') userId: number) {
    return this.cartService.getCart(+userId);
  }
}
