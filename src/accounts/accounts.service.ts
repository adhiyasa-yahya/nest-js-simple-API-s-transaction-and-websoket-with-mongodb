import { Injectable } from '@nestjs/common';
import { Account, AccountDocument } from './schemas/account.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel('account')
    private readonly accountModel: Model<AccountDocument>,
  ) {}

  async validateAccount(acc: Account): Promise<Account> {
    const user = await this.accountModel.findOne({ email: `${acc.email}` });
    if (user && user.name === acc.name) {
      const { ...result } = user;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return result;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return 'invalid user';
  }

  // create account
  async createAccount(acc: Account): Promise<Account> {
    const new_acc = new this.accountModel(acc);
    return new_acc.save();
  }
}
