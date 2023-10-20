import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionRepository } from 'src/shared/database/repositories/transaction.repositories';

@Injectable()
export class TransactionService {
    constructor(private readonly transactionRepo: TransactionRepository) {}

    async createTransaction( data: Partial<CreateTransactionDto> ) {
      const { carId } = data;

        return this.transactionRepo.create({
            data: {
                carId,
                value: 0
            }
        });
    }

    async updateTransaction(id: string) {
        const item = await this.transactionRepo.findUnique({
          where: {
            id
          }
        });

          const entryTime = new Date(item.entryTime);
          const scheduleNow = new Date();
      
          // Calcule a diferença em milissegundos
          const timeDifference = scheduleNow.getTime() - entryTime.getTime();
      
          // Converta a diferença em horas
          const hoursElapsed = timeDifference / (1000 * 60 * 60);
      
          // Calcule o valor com base no tempo decorrido
          let currentValue = 10; 
      
          if (hoursElapsed > 1) {
            const additionalHours = Math.ceil(hoursElapsed) - 1;
            currentValue += additionalHours * 8; // R$8 por hora adicional
          }
          const formatArray = {
            ...item,
            exitTime: scheduleNow,
            value: currentValue
          }

          return await this.transactionRepo.updateOne({
            data: {
               id: formatArray.id,
               carId: formatArray.carId,
               entryTime: formatArray.entryTime,
               exitTime: formatArray.exitTime,
               value: formatArray.value
            },
            where: {
                id
            }
          })
      
        return formatArray;
      }

}
