import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class SignInUserDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  password: number;

}
