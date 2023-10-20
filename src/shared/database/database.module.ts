import { Module, Global } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { UsersRepository } from "./repositories/users.repositories";
import { ParkingRepository } from "./repositories/parking.repositories";
import { CarRepository } from "./repositories/car.repositories copy";
import { TransactionRepository } from "./repositories/transaction.repositories";

@Global()
@Module({
  providers: [PrismaService, UsersRepository, ParkingRepository, CarRepository, TransactionRepository],
  exports: [UsersRepository, ParkingRepository, CarRepository, TransactionRepository],
})

export class DatabaseModule {}
