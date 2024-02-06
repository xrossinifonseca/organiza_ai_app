import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

function NoTask() {
  return (
    <View className="items-center w-full justify-center h-full gap-4">
      <Image style={{ width: 315, height: 202 }} source={require('~/assets/no-task.png')} />
      <Text className="text-center text-secundary font-medium text-2xl">
        Você não possui nenhuma tarefa criada. Crie um tarefa para começar
      </Text>

      <TouchableOpacity>
        <View className="w-[230px] h-[60px] bg-primary rounded-lg items-center justify-center">
          <Text className="text-3xl text-white font-medium">Criar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default NoTask;
