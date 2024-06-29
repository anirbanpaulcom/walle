import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Balance {
  type: string;
  amount: number;
  _id: string;
}

interface Transaction {
  type: string;
  amount: number;
  date: string;
  description: string;
  _id: string;
  timestamp: string;
}

interface UserState {
  _id: string;
  number: number;
  balance: Balance[];
  transactions: Transaction[];
}

const initialState: UserState = {
  _id: '',
  number: 0,
  balance: [],
  transactions: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      return {...state, ...action.payload};
    },
    updateBalance(
      state,
      action: PayloadAction<{type: string; amount: number}>,
    ) {
      const {type, amount} = action.payload;
      const balanceToUpdate = state.balance.find(b => b.type === type);
      if (balanceToUpdate) {
        balanceToUpdate.amount += amount;
      }
    },
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
  },
});

export const {setUser, updateBalance, addTransaction} = userSlice.actions;

export default userSlice.reducer;
