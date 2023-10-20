// create-parking.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  parkingId: string;

  @IsNotEmpty()
  plate: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  conductorName: string;
}