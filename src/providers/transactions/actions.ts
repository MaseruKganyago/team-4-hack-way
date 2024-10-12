import { ITransaction } from '@/models';
import { createAction } from 'redux-actions';
import { ITransactionsStateContext } from './context';

export enum TransactionsActions {
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  TRANSACTION_ERRORS = 'TRANSACTION_ERRORS',
}

export const getTransactionsAction = createAction<ITransactionsStateContext, ITransaction[]>(
  TransactionsActions.GET_TRANSACTIONS,
  (transactions: ITransaction[]) => ({ transactions })
);

export const transactionsErrorsAction = createAction<ITransactionsStateContext, any>(
  TransactionsActions.TRANSACTION_ERRORS,
  (errors: any) => ({ errors })
);
