import mongoose, { Document, Model, Schema } from 'mongoose';

interface Balance {
  type: 'cash' | 'card' | 'savings' | 'investments' | 'loans' | 'other';
  amount: number;
}

export interface Transaction {
  type: 'income' | 'expense';
  method: 'cash' | 'card' | 'savings' | 'investments' | 'loans' | 'other';
  category: 'shopping' | 'food' | 'entertainment' | 'transportation' | 'health' | 'utilities' | 'travel' | 'education' | 'personal care' | 'miscellaneous' | 'salary';
  amount: number;
  description:string
  date: Date;
}

interface User extends Document {
  name: string;
  email: string;
  image: string;
  balance: Balance[];
  transactions: Transaction[];
}

const BalanceSchema = new Schema({
  type: { type: String, enum: ['cash' , 'card' , 'savings' , 'investments' , 'loans' , 'other'], required: true },
  amount: { type: Number, default: 0 },
});

const TransactionSchema = new Schema({
  method: { type: String, enum: ['cash' , 'card' , 'savings' , 'investments' , 'loans' , 'other'], required: true },
  category: { type: String, enum: ['shopping' , 'food' , 'entertainment' , 'transportation' , 'health' , 'utilities' , 'travel' , 'education' , 'personal care' , 'miscellaneous' , 'salary'], required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true },
  timestamp: { type: Date, default: Date.now },
});

const UserSchema = new Schema({
  number: { type: Number, required: true },
  balance: { type: [BalanceSchema], required: true },
  transactions: { type: [TransactionSchema], default: [] },
});

const UserModel: Model<User> = mongoose.models.User || mongoose.model<User>('User', UserSchema);

export default UserModel;
