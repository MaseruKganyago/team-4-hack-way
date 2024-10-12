import { createContext } from 'react';

export type OpenModal = 'planner-form-modal' | 'closed';

export interface IUIStateContext {
  openModal: OpenModal;
}

export interface IUActionsContext {
  actionModalOpen: (modal: OpenModal) => void;
  closeModal: () => void;
}

export const INIT_UI_STATE_CONTEXT: IUIStateContext = {
  openModal: 'closed',
};

export const UIStateContext = createContext<IUIStateContext>(INIT_UI_STATE_CONTEXT);

export const UIActionContext = createContext<IUActionsContext | undefined>(undefined);
