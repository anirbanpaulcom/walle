import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LineOr = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.orText}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    borderBottomWidth: 1,
    flex: 1,
    borderColor: '#e4e6e1',
  },
  orText: {
    color: 'black',
    marginHorizontal: 10,
    fontWeight: '100',
  },
});

export default LineOr;
