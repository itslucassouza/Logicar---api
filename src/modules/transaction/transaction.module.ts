import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { CarService } from '../Car/car.service';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, CarService],
})
export class TransactionModule {}
