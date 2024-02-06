import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import NoTask from '../task/NoTask';
import Task from '../task/Task';
import { useTaskContext } from '~/context/TaskContextProvider';

export default function TaskList() {
  const { taskList } = useTaskContext();

  return (
    <View className="h-full p-2 gap-2 flex-1 mt-2 mb-2">
      {taskList.length > 0 ? (
        <View>
          <Text className="text-secundary text-xl font-medium">Hoje</Text>
          <ScrollView>
            <View className="gap-2">
              {taskList.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <NoTask />
      )}
    </View>
  );
}
