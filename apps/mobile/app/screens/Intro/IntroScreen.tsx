import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Welcome to Intro Screen</Text>
      <Button
        title="Start"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen;
