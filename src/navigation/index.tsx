import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Overview from '../screens/overview';
import Login from '~/screens/login';
import SignUp from '~/screens/signUp';
import Tasks from '~/screens/tasks';

export type RootStackParamList = {
  Overview: undefined;
  Login: undefined;
  SignUp: undefined;
  Tasks: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Overview" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
};
