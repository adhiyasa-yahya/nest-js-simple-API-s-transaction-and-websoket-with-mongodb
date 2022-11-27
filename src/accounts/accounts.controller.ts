import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './schemas/account.schema';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountService: AccountsService) {}

  @Post('/login')
  async login(@Body() accDto: Account) {
    return this.accountService.validateAccount(accDto);
  }

  @Post('/register')
  async createAccount(@Body() accDto: Account) {
    return this.accountService.createAccount(accDto);
  }
}
