import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        url_photo: string | null;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        url_photo: string | null;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        url_photo: string | null;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        url_photo: string | null;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        url_photo: string | null;
        stock: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
    }>;
}
