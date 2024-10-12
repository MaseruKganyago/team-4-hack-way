export interface ITransaction {
  cardNumber: string;
  postingDate: string;
  amount: number;
  category: string;
  description: string;
  transactionType: string | 'income' | 'expense';
}
