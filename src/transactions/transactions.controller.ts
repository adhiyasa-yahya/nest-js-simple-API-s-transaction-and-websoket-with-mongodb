import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Transaction } from './schemas/transaction.schema';
import { TransactionsService } from './transactions.service';

@Controller('trs')
export class TransactionsController {
  constructor(private readonly trService: TransactionsService) {}

  @Post('/transaction')
  async createAccount(@Body() trDto: Transaction) {
    return this.trService.createTransaction(trDto);
  }

  @Get('/get-balance/:id')
  async getBalance(@Param('id') id: string) {
    return this.trService.getBalance(id);
  }

  @Get('/get-history/:id')
  async getHistory(@Param('id') id: string) {
    return this.trService.getHistory(id);
  }
}
