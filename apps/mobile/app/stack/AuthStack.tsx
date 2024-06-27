import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from '../screens/Intro/IntroScreen';
import LoginScreen from '../screens/LoginView/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Intro">
    <Stack.Screen name="Intro" component={IntroScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthStack;
