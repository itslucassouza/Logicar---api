/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { SignInUserDTO } from './dto/signIn-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UsersRepository) {}

  async createUser(data: CreateUserDto ) {
    const { cpf, dataNascimento, nome, status} = data;
    return this.usersRepo.create({
      data: {
        cpf,
        dataNascimento,
        nome,
        status
      }
    });
  }

  async getUserByName(nome: string) {
      return this.usersRepo.findUnique({
         // @ts-ignore
        where: {
           nome: nome
        }
      })
  }

  async signin(signInUserDto: SignInUserDTO) {
    const { nome, password} = signInUserDto

    const nameAlreadyexist = await this.getUserByName(nome["nome"])

    if(nameAlreadyexist.nome.toLocaleLowerCase() !== nome.toLocaleLowerCase()) {
      throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Credenciais incorretas' })
    }

    if(!nameAlreadyexist || password !== 123) {
      throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Credenciais incorretas' })
    }

    if(nameAlreadyexist && password === 123)  {
      return nameAlreadyexist
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
