/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {enableScreens} from 'react-native-screens';
import AppStack from './app/stack/AppStack';
import store from './app/redux/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  enableScreens();

  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

export default App;
