import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './schemas/account.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'account',
        schema: AccountSchema,
      },
    ]),
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
