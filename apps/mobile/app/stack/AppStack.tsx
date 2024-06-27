import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import BottomTabStack from './BottomTabStack';

const AppStack = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppStack;
