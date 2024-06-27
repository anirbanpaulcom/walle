import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from '../components/BottomTab/BottomTab';
import Icon from '../assets/icons/icons';
import {StyleSheet} from 'react-native';
import ProfileScreen from '../screens/ProfileView/ProfileView.tsx';
import PayScreen from '../screens/PayView/PayView.tsx';
import ExpenseScreen from '../screens/ExpenceView/ExpenceScreen.tsx';
import IncomeScreen from '../screens/Income/IncomeScreen.tsx';

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
            tabBarIcon: ({focused}) => (
              <BottomTab
                normalIcon={'income'}
                focusedIcon={'incomefocus'}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PayScreen"
          component={PayScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <BottomTab
                normalIcon={'expence'}
                focusedIcon={'expencefocus'}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ExpenseTab"
          component={ExpenseScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <BottomTab
                normalIcon={'transaction'}
                focusedIcon={'transactionfocus'}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <BottomTab
                normalIcon={'profile'}
                focusedIcon={'profilefocus'}
                focused={focused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 60,
  },
});

export default BottomTabStack;
