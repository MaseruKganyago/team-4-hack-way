import { PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { INIT_TRANSCTIONS_CONTEXT_STATE, TransactionsActionContext, TransactionsStateContext } from './context';
import { transactionReducer } from './reducer';
import { useGet } from 'restful-react';
import { getTransactionsAction, transactionsErrorsAction } from './actions';
import { ITransaction } from '@/models';

interface IProps {}

const TransactionsProvider: React.FC<PropsWithChildren<IProps>> = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, INIT_TRANSCTIONS_CONTEXT_STATE);

  //#region getTransactions http query
  const {
    refetch: getTransactionsHttp,
    loading,
    data,
    error,
  } = useGet({
    path: 'https://team4.sandboxpay.co.za/za/pb/v1/accounts/4675778129910189600000003/transactions',
    lazy: true,
  });
  const transactions = data?.data?.transactions;

  useEffect(() => {
    if (data && !loading) {
      dispatch(getTransactionsAction(transactions as ITransaction[]));
    } else if (error) {
      dispatch(transactionsErrorsAction(error));
    }
  }, [data]);

  const getTransactions = () => {
    getTransactionsHttp();
  };
  //#endregion
  return (
    <TransactionsStateContext.Provider value={state}>
      <TransactionsActionContext.Provider value={{ getTransactions }}>{children}</TransactionsActionContext.Provider>
    </TransactionsStateContext.Provider>
  );
};

function useTransactionsState() {
  const context = useContext(TransactionsStateContext);

  if (context === undefined) {
    throw new Error('useTransactionsState must be used within a TransactionsProvider');
  }

  return context;
}

function useTransactionsActions() {
  const context = useContext(TransactionsActionContext);

  if (context === undefined) {
    throw new Error('useTransactionsActions must be used within a TransactionsProvider');
  }

  return context;
}

function useTransactions() {
  return { ...useTransactionsState(), ...useTransactionsActions() };
}

export { TransactionsProvider, useTransactionsState, useTransactionsActions, useTransactions };
