import { ReactNode, createContext, useContext, useState } from 'react';

export interface Task {
  id: number;
  name: string;
}

interface TaskContextProps {
  openModalCreate: boolean;
  openCreateTask: () => void;
  taskList: Task[];
}

const Context = createContext<TaskContextProps>({} as TaskContextProps);

type Props = {
  children: ReactNode;
};

export const TaskContextProvider = ({ children }: Props) => {
  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<Task[] | []>([]);

  const openCreateTask = () => {
    setOpenModalCreate((e) => !e);
  };

  return (
    <Context.Provider value={{ openModalCreate, openCreateTask, taskList }}>
      {children}
    </Context.Provider>
  );
};

export const useTaskContext = () => useContext(Context);
