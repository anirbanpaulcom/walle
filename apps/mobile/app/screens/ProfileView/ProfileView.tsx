import React, {useState} from 'react';
import {useColorScheme, StatusBar, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {sharedColors} from '../../constains/colors';
import {StyleSheet} from 'react-native';
import Container from '../../components/Wrapper/Container';
import TextView from '../../components/TextView/TextView';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const ProfileScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const user = useSelector((state: RootState) => state.user);

  const colorMode = {
    backgroundColor: sharedColors.lightMode.backgroundColor,
    color: 'black',
  };

  return (
    <SafeAreaView style={[styles.container, colorMode]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colorMode.backgroundColor}
      />
      <Container width="90%" height="100%" justifyContent="flex-start">
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'red',
          }}
          source={{
            uri: 'https://api.dicebear.com/7.x/micah/svg?seed',
          }}
        />
        <TextView type="mediumBold" style={{color: 'black'}}>
          Number :{user.number}
        </TextView>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  optionContainer: {
    width: 300,
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#222222',
    borderRadius: 10,
    padding: 4,
  },
  option: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
  },
  optionText: {
    color: 'white',
  },
  selectedOption: {
    backgroundColor: '#ebc634',
    color: 'black',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default ProfileScreen;
