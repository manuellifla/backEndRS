export declare class CreateProductDto {
    name: string;
    description: string;
    price: number;
    url_photo?: string;
    stock: number;
    categoryId: number;
}
export declare class UpdateProductDto {
    name?: string;
    description?: string;
    price?: number;
    url_photo?: string;
    stock?: number;
    categoryId?: number;
}
