import { ReactNode, createContext, useContext, useState } from 'react';

interface TaskContextProps {
  openModalCreate: boolean;
  openCreateTask: () => void;
}

const Context = createContext<TaskContextProps>({} as TaskContextProps);

type Props = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: Props) => {
  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);

  const openCreateTask = () => {
    setOpenModalCreate((e) => !e);
  };

  return (
    <Context.Provider value={{ openModalCreate, openCreateTask }}>{children}</Context.Provider>
  );
};

export const useTaskContext = () => useContext(Context);
