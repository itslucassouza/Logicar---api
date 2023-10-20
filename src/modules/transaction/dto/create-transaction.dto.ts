// create-parking.dto.ts
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  carId: string;

  @IsString()
  @IsOptional()
  entryTime: string;

  @IsString()
  @IsOptional()
  exitTime: string;

  @IsInt()
  @IsOptional()
  value: number;
}