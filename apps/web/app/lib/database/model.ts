import mongoose, { Document, Model, Schema } from 'mongoose';

interface Balance {
  type: 'Cash' | 'Card' | 'Savings' | 'Investments' | 'Loans' | 'Other';
  amount: number;
}

export interface Transaction {
  type: 'income' | 'expense';
  method: 'Cash' | 'Card' | 'Savings' | 'Investments' | 'Loans' | 'Other';
  category: 'Shopping' | 'Food' | 'Entertainment' | 'Transportation' | 'Health' | 'Utilities' | 'Travel' | 'Education' | 'Personal Care' | 'Miscellaneous';
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
  type: { type: String, enum: ['Cash', 'Card', 'Savings', 'Investments', 'Loans', 'Other'], required: true },
  amount: { type: Number, default: 0 },
});

const TransactionSchema = new Schema({
  method: { type: String, enum: ['Cash', 'Card', 'Savings', 'Investments', 'Loans', 'Other'], required: true },
  category: { type: String, enum: ['Shopping', 'Food', 'Entertainment', 'Transportation', 'Health', 'Utilities', 'Travel', 'Education', 'Personal Care', 'Miscellaneous'], required: true },
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
