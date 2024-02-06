import { View, Text, ScrollView, TextInput } from 'react-native';
import React from 'react';
import Task from '~/components/task/Task';
import NoTask from '~/components/task/NoTask';

import Create from '~/components/task/Create';
import { TaskContextProvider } from '~/context/TaskContextProvider';
import { Feather } from '@expo/vector-icons';

export interface TaskList {
  id: number;
  name: string;
}

export default function Tasks() {
  const tasks: TaskList[] = [];

  return (
    <TaskContextProvider>
      <View className="jutify-start relative h-full">
        <View className="h-[220px] bg-primary p-4 justify-end gap-5">
          <Text className="text-gray-primary font-medium text-3xl">Olá, Rossini.</Text>
          <View className="relative  justify-center">
            <TextInput placeholder="pesquisar" className="w-full p-2 bg-white h-12 rounded-full" />
            <Feather name="search" size={20} color={'#00736D'} className="absolute right-2" />
          </View>

          <View className="gap-2 ">
            <Text className="text-gray-primary font-light text-sm">Hoje, 5 Fev.</Text>
            <Text className="text-gray-primary font-medium text-2xl">Minhas Tarefas</Text>
          </View>
        </View>

        <View className="h-full p-2 gap-2 flex-1 mt-2 mb-2">
          {tasks.length > 0 ? (
            <View>
              <Text className="text-secundary text-xl font-medium">Hoje</Text>
              <ScrollView>
                <View className="gap-2">
                  {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                  ))}
                </View>
              </ScrollView>
            </View>
          ) : (
            <NoTask />
          )}
        </View>

        <View className="absolute h-full">
          <Create />
        </View>
      </View>
    </TaskContextProvider>
  );
}
