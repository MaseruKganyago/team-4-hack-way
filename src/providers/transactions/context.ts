import { ITransaction } from '@/models';
import exp from 'constants';
import { createContext } from 'react';

export interface ITransactionsStateContext {
  transactions?: ITransaction[];
  errors?: any;
}

export interface ITransactionsActionContext {
  getTransactions: () => void;
}

export const INIT_TRANSCTIONS_CONTEXT_STATE: ITransactionsStateContext = {};

export const TransactionsStateContext = createContext<ITransactionsStateContext>(INIT_TRANSCTIONS_CONTEXT_STATE);

export const TransactionsActionContext = createContext<ITransactionsActionContext | undefined>(undefined);
