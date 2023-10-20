/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { CarRepository } from 'src/shared/database/repositories/car.repositories copy';
import { TransactionService } from '../transaction/transaction.service';

@Injectable()
export class CarService {
    constructor(
      private readonly carRepo: CarRepository,
      private readonly transactionService: TransactionService 
      ) {}

    async findAllCars() {
      const allCars = await this.carRepo.findAll();
      const allTransactions = await this.transactionService.getAllTransactions();
    
      // Crie um objeto que associe os carros com suas transações
      const carTransactionsMap = {};
    
      allTransactions.allTransactions.forEach(transaction => {
        const carId = transaction.carId;
    
        if (!carTransactionsMap[carId]) {
          carTransactionsMap[carId] = [];
        }
    
        carTransactionsMap[carId].push(transaction);
      });
    
      // Atualize o array allCars para incluir as transações
      const updatedCars = allCars.map(car => {
        const carId = car.id;
        // @ts-ignore
        car.transactions = carTransactionsMap[carId] || [];
    
        return car;
      });

      const arraywithStatus = updatedCars.map((item) => {
        // @ts-ignore
        const checkStatus = item.transactions.filter((item) => item.exitTime === null)

        const formatArray = {
          ...item,
          status: checkStatus.length > 0 ? "active" : "inactive"
        }

        return formatArray
      })

    
      return arraywithStatus
    }

    async createCar(data: CreateCarDto ) {
      const { parkingId, plate, color, conductorName} = data;

      return this.carRepo.create({
        data: {
          parkingId,
          plate,
          color,
          conductorName
        }
      });
    }

}
