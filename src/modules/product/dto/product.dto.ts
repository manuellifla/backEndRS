// product.dto.ts
export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  url_photo?: string; // A URL da foto é opcional
  stock: number;
  categoryId: number;
}

export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  url_photo?: string;
  stock?: number;
  categoryId?: number;
}
