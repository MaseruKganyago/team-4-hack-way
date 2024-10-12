import { createAction } from 'redux-actions';
import { IUIStateContext, OpenModal } from './context';

export enum UIActions {
  ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export const actionOpenModalAction = createAction<IUIStateContext, OpenModal>(
  UIActions.ACTION_OPEN_MODAL,
  (openModal: OpenModal) => ({ openModal })
);

export const closeModalAction = createAction<IUIStateContext>(UIActions.CLOSE_MODAL, () => ({ openModal: 'closed' }));
