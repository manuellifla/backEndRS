export class CreateCartDto {
  userId: number;
}

export class AddItemDto {
  productId: number;
  quantity: number;
}

export class UpdateItemDto {
  productId: number;
  quantity: number;
}
