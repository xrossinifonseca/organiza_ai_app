import { View, Text, ScrollView, TextInput } from 'react-native';
import React from 'react';
import Task from '~/components/task/Task';
import NoTask from '~/components/task/NoTask';

import Create from '~/components/task/Create';
import { TaskContextProvider, useTaskContext } from '~/context/TaskContextProvider';
import { Feather } from '@expo/vector-icons';
import TaskList from '~/components/task/TaskList';

export default function Tasks() {
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

        <TaskList />

        <View className="absolute h-full">
          <Create />
        </View>
      </View>
    </TaskContextProvider>
  );
}
