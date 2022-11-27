import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TsSchema } from './schemas/transaction.schema';
import { GatewayGateway } from '../gateway/gateway.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'transaction',
        schema: TsSchema,
      },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService, GatewayGateway],
})
export class TransactionsModule {}
