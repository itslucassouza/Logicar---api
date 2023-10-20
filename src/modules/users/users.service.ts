import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

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

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
