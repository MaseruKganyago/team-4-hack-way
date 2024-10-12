import { stat } from 'fs';
import { IUIStateContext } from './context';
import { UIActions } from './actions';

export const uiReducer = (state: IUIStateContext, action: ReduxActions.Action<IUIStateContext>) => {
  const { type, payload } = action;

  switch (type) {
    case UIActions.ACTION_OPEN_MODAL:
    case UIActions.CLOSE_MODAL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
