/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { type Prisma } from "@prisma/client";

@Injectable()
export class CarRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.CarsCreateArgs) {
    return this.prismaService.cars.create(createDto);
  }

  findAll() {
    return this.prismaService.cars.findMany()
  }

//   findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
//     return this.prismaService.user.findUnique(findUniqueDto);
//   }
}
