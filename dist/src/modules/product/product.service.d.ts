import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
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
