import { Injectable } from '@nestjs/common';
import { Transaction, TsDocument } from './schemas/transaction.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('transaction')
    private readonly tsModel: Model<TsDocument>,
  ) {}

  async createTransaction(acc: Transaction): Promise<Transaction> {
    const new_tr = new this.tsModel(acc);
    return new_tr.save();
  }

  // get balance
  async getBalance(id) {
    const result = await this.tsModel.find({
      account_id: id,
    });

    const totalDebit = result
      .map((a) => parseFloat(a.debit))
      .reduce((acc, n) => acc + n, 0);
    const totalCredit = result
      .map((a) => parseFloat(a.credit))
      .reduce((acc, n) => acc + n, 0);
    return eval(String(totalCredit - totalDebit));
  }

  // get history
  async getHistory(id) {
    return this.tsModel.find({
      account_id: id,
    });
  }
}
