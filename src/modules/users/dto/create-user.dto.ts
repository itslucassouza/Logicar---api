import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  dataNascimento: string;

  @IsEnum(['ativo', 'inativo'])
  @IsNotEmpty()
  status: 'ativo' | 'inativo';
}
