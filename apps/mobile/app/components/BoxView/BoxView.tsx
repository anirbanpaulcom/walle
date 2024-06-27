import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import getIcon from '../../functions/functions';

const BoxView = ({color, size, type, amount}) => {
  const boxSize = size === 'lg' ? styles.largeBox : styles.smallBox;
  const iconPoadding = size === 'lg' ? 20 : 10;

  return (
    <TouchableOpacity style={[styles.box, boxSize, {backgroundColor: color}]}>
      <View
        style={{
          backgroundColor: 'white',
          padding: iconPoadding,
          borderRadius: 25,
        }}>
        {getIcon(type)}
      </View>
      <View
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{type}</Text>
        <Text style={{fontSize: 20, fontWeight: 900}}>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 25,
    margin: 3,
  },
  smallBox: {
    width: 115,
    height: 135,
  },
  largeBox: {
    width: 170,
    height: 170,
  },
});

export default BoxView;
