/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {enableScreens} from 'react-native-screens';
import AppStack from './app/stack/AppStack';

function App(): React.JSX.Element {
  enableScreens();

  return <AppStack />;
}

export default App;
