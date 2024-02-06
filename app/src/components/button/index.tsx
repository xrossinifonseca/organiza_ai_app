import { ReactNode } from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';

interface ButtonContainerProps extends TouchableOpacityProps {
  children?: ReactNode;
}

const ButtonContainer = ({ children, ...props }: ButtonContainerProps) => {
  return (
    <TouchableOpacity
      className="rounded-xl bg-secundary p-2 w-full h-[60px] items-center justify-center shadow-black shadow-sm"
      activeOpacity={0.7}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export const Button = {
  Container: ButtonContainer,
};
