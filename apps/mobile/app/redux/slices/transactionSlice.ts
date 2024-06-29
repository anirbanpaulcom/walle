import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TransactionState {
  transactions: Transaction[];
}

interface Transaction {
  type: string;
  method: string;
  category: string;
  amount: number;
  description: string;
  _id: string;
  timestamp: string;
}

const initialState: TransactionState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransactions(state, action: PayloadAction<Transaction[]>) {
      state.transactions = action.payload;
    },
    addNewTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
  },
});

export const {setTransactions, addNewTransaction} = transactionSlice.actions;

export default transactionSlice.reducer;
