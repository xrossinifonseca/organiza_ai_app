import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { RootStackParamList } from '../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input } from '~/components/input';
import { useState } from 'react';
import { cnpjApplyMask, cpfApplyMask } from '~/utils/masks/';
import { Button } from '~/components/button';
import { Feather } from '@expo/vector-icons';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

function Login() {
  const [text, setText] = useState('');
  const navigation = useNavigation<OverviewScreenNavigationProps>();

  const applyMask = (input: string) => {
    const onlyNumber = input.replace(/\D/g, '');

    if (onlyNumber.length === 11) {
      const cpf = cpfApplyMask(onlyNumber);
      return setText(cpf);
    }

    if (onlyNumber.length === 14) {
      const cnpj = cnpjApplyMask(input);
      return setText(cnpj);
    }

    const nameOrPix = input.replace(/[^a-zA-Z0-9 ]/g, '');
    setText(nameOrPix);
  };

  return (
    <View className=" bg-primary h-full items-center p-5 justify-center gap-5 flex-1">
      <Image source={require('../assets/logo.png')} />

      <View className="items-center gap-2">
        <Text className="text-gray-primary font-bold text-4xl">Entrar</Text>
        <Text className="text-gray-primary font-medium text-lg">Bem vindo de volta!</Text>
      </View>

      <View className="w-full items-center gap-4">
        <View className="w-full">
          <Input.Container>
            <Input.Fild placeholder="Email" keyboardType="email-address" />
          </Input.Container>
          <View className="h-full absolute justify-center left-2">
            <Feather name="user" color={'#00736D'} size={20} />
          </View>
        </View>

        <View className="w-full">
          <Input.Container>
            <Input.Fild placeholder="Senha" secureTextEntry={true} />
          </Input.Container>
          <View className="h-full absolute justify-center left-2">
            <Feather name="lock" color={'#00736D'} size={20} />
          </View>
        </View>

        <Button.Container onPress={() => navigation.navigate('Tasks')}>
          <Text className="text-white font-medium text-2xl">Entrar</Text>
        </Button.Container>
      </View>

      <View className="">
        <Text className="text-gray-primary text-lg">
          Não possui uma conta ainda?{' '}
          <Text
            onPress={() => navigation.navigate('SignUp')}
            className="text-secundary font-semibold">
            Cadastre-se
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Login;

/* <TouchableOpacity
        className="w-4/5 bg-[#7ae7db] items-center p-2 h-14 justify-center rounded-lg"
        onPress={() => navigation.navigate('Overview')}>
        <Text className="text-white text-xl font-semibold">Consultar</Text>
      </TouchableOpacity> */
