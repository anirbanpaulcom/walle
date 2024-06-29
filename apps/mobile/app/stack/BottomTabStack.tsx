import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import ProfileScreen from '../screens/ProfileView/ProfileView.tsx';
import PayScreen from '../screens/PayView/PayView.tsx';
import ExpenseScreen from '../screens/ExpenceView/ExpenceScreen.tsx';
import IncomeScreen from '../screens/Income/IncomeScreen.tsx';
import {getIcon} from '../functions/functions.tsx';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.container,
        }}>
        <Tab.Screen
          name="HomeTab"
          component={IncomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? getIcon('incomefocus') : getIcon('income'),
          }}
        />
        <Tab.Screen
          name="PayScreen"
          component={PayScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? getIcon('expencefocus') : getIcon('expence'),
          }}
        />
        <Tab.Screen
          name="ExpenseTab"
          component={ExpenseScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? getIcon('transactionfocus') : getIcon('transaction'),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? getIcon('profilefocus') : getIcon('profile'),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 50,
  },
});

export default BottomTabStack;
