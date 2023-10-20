import { Body, Controller, Post, Put, Param, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @Get()
  getAll() {
    return this.transactionService.getAllTransactions()
  }

  @Put(':id')
  async updateTransaction(@Param('id') id: string) {
   return this.transactionService.updateTransaction(id)
  }
}
