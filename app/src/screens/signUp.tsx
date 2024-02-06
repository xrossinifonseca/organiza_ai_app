import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Button } from '~/components/button';
import { Input } from '~/components/input';
import { RootStackParamList } from '~/navigation';

type SignUpScreenNavigationProps = StackNavigationProp<RootStackParamList, 'SignUp'>;

function SignUp() {
  const navigation = useNavigation<SignUpScreenNavigationProps>();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className=" bg-primary  h-full items-center p-4 justify-center gap-5 ">
        <View className="items-center w-full justify-center gap-4 flex-1">
          <View className="w-full">
            <Text className="text-gray-primary font-bold text-4xl">Criar uma conta</Text>
            <Text className="text-gray-primary font-normal text-base">
              Uma conta é necessária para usar este aplicativo.
            </Text>
          </View>

          <View className="w-full">
            <Input.Container>
              <Input.Fild placeholder="Nome" keyboardType="default" />
            </Input.Container>
            <View className="h-full absolute justify-center left-2">
              <Feather name="user" color={'#00736D'} size={20} />
            </View>
          </View>

          <View className="w-full">
            <Input.Container>
              <Input.Fild placeholder="Email" keyboardType="email-address" />
            </Input.Container>
            <View className="h-full absolute justify-center left-2">
              <MaterialIcons name="email" color={'#00736D'} size={20} />
            </View>
          </View>

          <View className="w-full">
            <Input.Container>
              <Input.Fild placeholder="Senha" secureTextEntry={true} />
              <View className="h-full absolute justify-center left-2">
                <Feather name="lock" color={'#00736D'} size={20} />
              </View>
            </Input.Container>
          </View>

          <View className="w-full">
            <Input.Container>
              <Input.Fild placeholder="Confirmar senha" secureTextEntry={true} />
            </Input.Container>
            <View className="h-full absolute justify-center left-2">
              <Feather name="check" color={'#00736D'} size={20} />
            </View>
          </View>

          <Button.Container>
            <Text className="text-white font-medium text-2xl">Cadatrar</Text>
          </Button.Container>

          <View className="">
            <Text className="text-center text-gray-primary">
              Ao se inscrever, você está concordando com os {'\n'}{' '}
              <Text className="text-secundary font-medium">Termos de Serviços</Text> e{' '}
              <Text className="text-secundary font-medium">Política de privacidade.</Text>
            </Text>
          </View>
        </View>

        <View className="">
          <Text className="text-gray-primary text-lg">
            Ja possui uma conta?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              className="text-secundary font-semibold">
              Fazer login
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUp;
