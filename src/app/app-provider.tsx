'use client';

import { TransactionsProvider, UIProvider } from '@/providers';
import { FC, PropsWithChildren } from 'react';

export interface IAppProviderProps {}

export const AppProvider: FC<PropsWithChildren<IAppProviderProps>> = ({ children }) => {
  return (
    <TransactionsProvider>
      <UIProvider>{children}</UIProvider>
    </TransactionsProvider>
  );
};
