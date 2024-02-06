import { ReactNode, createContext, useContext } from 'react';

interface TaskContextProvider {}

const Context = createContext<TaskContextProvider>({});

type Props = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: Props) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useTaskContext = () => useContext(Context);
