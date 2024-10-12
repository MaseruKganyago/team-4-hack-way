import { PropsWithChildren, useContext, useReducer } from 'react';
import { uiReducer } from './reducer';
import { INIT_UI_STATE_CONTEXT, OpenModal, UIActionContext, UIStateContext } from './context';
import { actionOpenModalAction } from './actions';

interface IProps {}

const UIProvider: React.FC<PropsWithChildren<IProps>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, INIT_UI_STATE_CONTEXT);

  const actionModalOpen = (modal: OpenModal) => {
    dispatch(actionOpenModalAction(modal));
  };

  const closeModal = () => {
    dispatch(actionOpenModalAction('closed'));
  };

  return (
    <UIStateContext.Provider value={state}>
      <UIActionContext.Provider value={{ actionModalOpen, closeModal }}>{children}</UIActionContext.Provider>
    </UIStateContext.Provider>
  );
};

function useUIState() {
  const context = useContext(UIStateContext);

  if (context === undefined) {
    throw new Error('useUIState must be used within a UIProvider');
  }

  return context;
}

function useUIActions() {
  const context = useContext(UIActionContext);

  if (context === undefined) {
    throw new Error('useUIActions must be used within a UIProvider');
  }

  return context;
}

function useUI() {
  return { ...useUIState(), ...useUIActions() };
}

export { UIProvider, useUIState, useUIActions, useUI };
