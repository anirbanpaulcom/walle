export const expensesCategories = [
  {id: 1, type: 'Shopping', amount: 0, color: '#fff7db'},
  {id: 2, type: 'Food', amount: 0, color: '#fee0d5'},
  {id: 3, type: 'Entertainment', amount: 0, color: '#e0ecff'},
  {id: 4, type: 'Transportation', amount: 0, color: '#e0fee2'},
  {id: 5, type: 'Health', amount: 0, color: '#e0fee2'},
  {id: 6, type: 'Utilities', amount: 0, color: '#e8e0fe'},
  {id: 7, type: 'Travel', amount: 0, color: '#d5fff8'},
  {id: 8, type: 'Education', amount: 0, color: '#95D2B3'},
  {id: 9, type: 'Personal Care', amount: 0, color: '#F6F5F2'},
  {id: 10, type: 'Miscellaneous', amount: 0, color: '#DFCCFB'},
];

export const balanceCategories = [
  {id: 1, type: 'Cash', amount: 0, color: '#fff7db'},
  {id: 2, type: 'Card', amount: 0, color: '#fee0d5'},
  {id: 3, type: 'Savings', amount: 0, color: '#e0ecff'},
  {id: 4, type: 'Investments', amount: 0, color: '#e0fee2'},
  {id: 5, type: 'Loans', amount: 0, color: '#e8e0fe'},
  {id: 6, type: 'Other', amount: 0, color: '#d5fff8'},
];

interface finance {
  type: string;
  amount: Number;
}

interface expense {
  type: string;
  amount: number;
}

interface transaction {
  method: string;
  catagories: string;
  amount: Number;
}
