import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TransactionModule } from '../transaction/transaction.module';
import { TransactionService } from '../transaction/transaction.service';

@Module({
  imports: [TransactionModule],
  controllers: [CarController],
  providers: [CarService, TransactionService],
})
export class CarModule {}
