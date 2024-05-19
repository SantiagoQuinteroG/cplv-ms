import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEntryDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
