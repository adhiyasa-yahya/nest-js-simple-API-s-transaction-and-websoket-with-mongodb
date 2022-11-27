import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TsDocument = Transaction & Document;

@Schema()
export class Transaction extends Document {
  @Prop()
  account_id: string;

  @Prop()
  credit: string;

  @Prop()
  debit: string;

  @Prop({ default: Date.now() })
  created_at: Date;
}

export const TsSchema = SchemaFactory.createForClass(Transaction);
