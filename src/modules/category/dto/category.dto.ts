import { IsString, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class CategoryDto {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
