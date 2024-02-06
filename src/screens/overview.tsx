import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { RootStackParamList } from '../navigation';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  return (
    <View className="bg-primary h-full justify-center items-center gap-5">
      <View className="justify-center items-center mt-20 gap-5">
        <Image source={require('~/assets/logo.png')} />
        <Text className="text-gray-primary text-4xl font-semibold">Organize suas tarefas.</Text>
        <Text className="text-gray-200 text-2xl text-center">
          Apenas a um clique de {'\n'} se organizar.
        </Text>
      </View>

      <View className="bg-white rounded-full">
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className="w-full  justify-end p-5">
          <Feather name="arrow-right" color={'#00736D'} size={60} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6',
  main: 'flex-1 max-w-[960] justify-between',
  title: 'text-[64px] font-bold',
  subtitle: 'text-4xl text-gray-700',
};
