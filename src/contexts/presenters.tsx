import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type PresentersType = Array<string> | null;

type PresentersContextType = {
  presenters: PresentersType;
  setPresenters: Dispatch<SetStateAction<PresentersType>>;
};

const PresentersContextDefaultValues: PresentersContextType = {
  presenters: null,
  setPresenters: () => {},
};

const PresentersContext = createContext<PresentersContextType>(PresentersContextDefaultValues);

export const usePresenters = () => {
  const context = useContext(PresentersContext);
  if (!context) {
    throw new Error('usePresenters훅은 Presenters Context 안에서만 호출 가능합니다.');
  }
  return context;
};

type PresentersProviderProps = {
  children: ReactNode;
};

export const PresentersProvider = ({ children }: PresentersProviderProps) => {
  const [presenters, setPresenters] = useState<PresentersType>(null);
  const value = { presenters, setPresenters };
  return <PresentersContext.Provider value={value}>{children}</PresentersContext.Provider>;
};
