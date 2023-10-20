// create-parking.dto.ts
import {  IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateParkingDto {
  @IsString()
  userId: string;

  @IsNotEmpty()
  parkingName: string;

  @IsInt()
  @IsNotEmpty()
  cash: number;
}