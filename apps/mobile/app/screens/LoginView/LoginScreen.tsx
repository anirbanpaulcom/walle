import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {sharedColors} from '../../constains/colors';
import {sharedStyles} from '../../constains/styles';
import Container from '../../components/Wrapper/Container';
import Input from '../../components/InputView/Input';
import ButtonView from '../../components/ButtonView/buttonView';
import {fetcher} from '../../api/api';
import {setUser} from '../../redux/slices/userSlice';
import {setLoggedIn} from '../../redux/slices/authSlice';

const LoginScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const user = await fetcher('POST', '/user', {number});
      if (user) {
        dispatch(setUser(user));
        dispatch(setLoggedIn(true));
      }
    } catch (error) {
      console.error('Login Failed');
    }
  };

  const colorMode = {
    backgroundColor: sharedColors.lightMode.backgroundColor,
    textColor: sharedColors.lightMode.textColor,
  };

  return (
    <SafeAreaView style={[styles.container, colorMode]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colorMode.backgroundColor}
      />
      <Container>
        <Container alignItems="flex-start">
          <Text style={[{color: colorMode.textColor}, sharedStyles.largeText]}>
            Login
          </Text>
          <Text style={[{color: colorMode.textColor}, sharedStyles.mediumText]}>
            Enter Your number to proceed
          </Text>
        </Container>
        <Input
          placeholder="Enter number"
          value={number}
          onChangeText={setNumber}
        />
        <ButtonView title="Continue" onPress={handleLogin} />
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
  },
});

export default LoginScreen;
