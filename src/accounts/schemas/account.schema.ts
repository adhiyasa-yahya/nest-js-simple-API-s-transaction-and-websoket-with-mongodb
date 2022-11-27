import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account extends Document {
  @Prop({ unique: true })
  email: string;

  @Prop()
  name: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
