import { View, Text } from 'react-native';
import React from 'react';
import { TaskList } from '~/screens/tasks';

export default function Task({ task }: { task: TaskList }) {
  const { name, id } = task;

  return (
    <View className="bg-white p-2 rounded-lg min-h-14 justify-center">
      <Text className="font-medium text-secundary">{name}</Text>
    </View>
  );
}
