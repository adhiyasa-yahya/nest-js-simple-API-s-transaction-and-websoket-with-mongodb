import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hoho:eFZachRiBFJtJfVn@clusterjobtest.myqcadl.mongodb.net/?retryWrites=true&w=majority',
    ),
    AccountsModule,
    TransactionsModule,
    GatewayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
