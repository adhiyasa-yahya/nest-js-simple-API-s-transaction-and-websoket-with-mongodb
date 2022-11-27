import { Injectable } from '@nestjs/common';
import { Transaction, TsDocument } from './schemas/transaction.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GatewayGateway } from '../gateway/gateway.gateway';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('transaction')
    private readonly tsModel: Model<TsDocument>,
    private readonly socketGateway: GatewayGateway,
  ) {}

  async createTransaction(acc: Transaction): Promise<Transaction> {
    const new_tr = new this.tsModel(acc);
    const result = new_tr.save();
    this.socketGateway.server.of('sender').emit('transaction', 'success');
    return result;
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
