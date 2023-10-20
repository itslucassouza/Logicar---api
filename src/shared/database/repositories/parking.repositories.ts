/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { type Prisma } from "@prisma/client";

@Injectable()
export class ParkingRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ParkingCreateArgs) {
    return this.prismaService.parking.create(createDto);
  }

//   findUnique(findUniqueDto: Prisma.UserFindUniqueArgs) {
//     return this.prismaService.user.findUnique(findUniqueDto);
//   }
}
