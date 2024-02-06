import { ReactNode } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { TouchableOpacityProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface InputContainerProps {
  children?: ReactNode;
}

const InputContainer = ({ children }: InputContainerProps) => {
  return <View className="w-full relative">{children}</View>;
};

const InputFild = (props: TextInputProps) => {
  return <TextInput className="bg-white w-full h-14 rounded-lg pl-10 p-2" {...props}></TextInput>;
};

const InputClearButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <Feather name="x" size={24} color="#999" />
    </TouchableOpacity>
  );
};

export const Input = {
  Container: InputContainer,
  Fild: InputFild,
  ClearButton: InputClearButton,
};
