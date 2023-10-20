/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { type Prisma } from "@prisma/client";

@Injectable()
export class TransactionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.TransactionsCreateArgs) {
    return this.prismaService.transactions.create(createDto);
  }

  findAll() {
    return this.prismaService.transactions.findMany()
  }

  findUnique(findUniqueDto: Prisma.TransactionsFindUniqueArgs) {
    return this.prismaService.transactions.findUnique(findUniqueDto);
  }

  updateOne(updateUniqueDto: any) {
    return this.prismaService.transactions.update(updateUniqueDto);
  }
}
