import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CategoryEnum } from 'src/models/category.enum';

export class InventoryRequestDTO {
  @IsString({ message: 'The name should be a string' })
  @IsNotEmpty({ message: 'The name should not be empty' })
  name: string;

  @IsInt({ message: 'The quantity should be a integer' })
  @IsNotEmpty({ message: 'The quantity should not be empty' })
  quantity: number;

  @IsNumber({}, { message: 'The price should be a number' })
  @IsNotEmpty({ message: 'The price should not be empty' })
  price: number;

  @IsString({ message: 'The category should be a string' })
  @IsNotEmpty({ message: 'The category should not be empty' })
  @IsEnum(CategoryEnum, {
    message: `The category is not in the list of valid options: ${Object.values(CategoryEnum)}`,
  })
  category: CategoryEnum;
}
