import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Task from '~/components/task/Task';
import NoTask from '~/components/task/NoTask';
import Header from '~/components/tasks/Header';

export interface TaskList {
  id: number;
  name: string;
}

export default function Tasks() {
  const tasks: TaskList[] = [];

  return (
    <View className="jutify-start relative h-full">
      <Header />

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
    </View>
  );
}
