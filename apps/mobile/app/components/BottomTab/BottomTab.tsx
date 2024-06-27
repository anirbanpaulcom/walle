import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import getIcon from '../../functions/functions';

interface BottomTab {
  focusedIcon: any;
  normalIcon: any;
  focused: boolean;
  center?: boolean;
}

const BottomTab = ({focused, focusedIcon, normalIcon}: BottomTab) => {
  const Icon = focused ? focusedIcon : normalIcon;
  return <View style={[styles.container]}>{getIcon(Icon)}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  text: {
    fontSize: 10,
    fontWeight: '400',
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default BottomTab;
