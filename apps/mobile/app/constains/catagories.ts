export interface Category {
  id: number;
  type: string;
  amount: number;
  color: string;
}

export const expensesCategories: Category[] = [
  {id: 1, type: 'shopping', amount: 0, color: '#fff7db'},
  {id: 2, type: 'food', amount: 0, color: '#fee0d5'},
  {id: 3, type: 'entertainment', amount: 0, color: '#e0ecff'},
  {id: 4, type: 'transportation', amount: 0, color: '#e0fee2'},
  {id: 5, type: 'health', amount: 0, color: '#e0fee2'},
  {id: 6, type: 'utilities', amount: 0, color: '#e8e0fe'},
  {id: 7, type: 'travel', amount: 0, color: '#d5fff8'},
  {id: 8, type: 'education', amount: 0, color: '#95D2B3'},
  {id: 9, type: 'personal Care', amount: 0, color: '#F6F5F2'},
  {id: 10, type: 'miscellaneous', amount: 0, color: '#DFCCFB'},
];

export const defaultbalance = [
  {id: 1, type: 'cash', amount: 0, color: '#fff7db'},
  {id: 2, type: 'card', amount: 0, color: '#fee0d5'},
  {id: 3, type: 'savings', amount: 0, color: '#e0ecff'},
  {id: 4, type: 'investments', amount: 0, color: '#e0fee2'},
  {id: 5, type: 'loans', amount: 0, color: '#e8e0fe'},
  {id: 6, type: 'other', amount: 0, color: '#d5fff8'},
];

const Categories: Category[] = [...expensesCategories, ...defaultbalance];

export default Categories;