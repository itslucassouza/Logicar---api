import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { DatabaseModule } from "./shared/database/database.module";
import { ParkingModule } from './modules/parking/parking.module';
import { CarModule } from './modules/Car/car.module';
import { TransactionModule } from './modules/transaction/transaction.module';


@Module({
  imports: [UsersModule, DatabaseModule, ParkingModule, CarModule, TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
