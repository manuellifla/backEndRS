import { Injectable } from '@nestjs/common';
import { AddItemDto, UpdateItemDto } from './dto/cart.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  // Criar um carrinho para um usuário
  async createCart(userId: number) {
    return this.prisma.cart.create({
      data: {
        userId,
      },
    });
  }

  // Adicionar item ao carrinho
  async addItem(cartId: number, dto: AddItemDto) {
    const { productId, quantity } = dto;
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product || product.stock < quantity) {
      throw new Error('Produto indisponível ou estoque insuficiente');
    }

    const cartItemId = this.prisma.cartItem.findFirst({
      where: {
        cartId: cartId,
        productId: productId,
      },
      select: {
        id: true,
      },
    });

    return this.prisma.cartItem.upsert({
      where: {
        id: (await cartItemId).id,
      },
      update: { quantity: { increment: quantity } },
      create: { cartId, productId, quantity },
    });
  }

  // Atualizar a quantidade de um item no carrinho
  async updateItem(cartId: number, dto: UpdateItemDto) {
    const { productId, quantity } = dto;

    const cartItemId = this.prisma.cartItem.findFirst({
      where: {
        cartId: cartId,
        productId: productId,
      },
      select: {
        id: true,
      },
    });

    return this.prisma.cartItem.update({
      where: { id: (await cartItemId).id },
      data: { quantity },
    });
  }

  // Remover um item do carrinho
  async removeItem(cartId: number, productId: number) {
    const cartItemId = this.prisma.cartItem.findFirst({
      where: {
        cartId: cartId,
        productId: productId,
      },
      select: {
        id: true,
      },
    });

    return this.prisma.cartItem.delete({
      where: { id: (await cartItemId).id },
    });
  }

  // Finalizar compra (alterar status do carrinho)
  async checkout(cartId: number) {
    const cartItems = await this.prisma.cartItem.findMany({
      where: { cartId },
    });
    if (!cartItems.length) {
      throw new Error('Carrinho vazio');
    }

    await Promise.all(
      cartItems.map((item) =>
        this.prisma.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        }),
      ),
    );

    return this.prisma.cart.update({
      where: { id: cartId },
      data: { status: 'completed' },
    });
  }

  // Obter carrinho de um usuário
  async getCart(userId: number) {
    return this.prisma.cart.findFirst({
      where: { userId, status: 'active' },
      include: { items: { include: { product: true } } },
    });
  }
}
