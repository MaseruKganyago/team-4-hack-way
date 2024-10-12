import { TransactionsActions } from './actions';
import { ITransactionsStateContext } from './context';

export const transactionReducer = (
  state: ITransactionsStateContext,
  action: ReduxActions.Action<ITransactionsStateContext>
): ITransactionsStateContext => {
  const { type, payload } = action;
  switch (type) {
    case TransactionsActions.GET_TRANSACTIONS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
