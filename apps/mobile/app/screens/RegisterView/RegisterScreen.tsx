import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {sharedColors} from '../../constains/colors';
import {sharedStyles} from '../../constains/styles';
import Container from '../../components/Wrapper/Container';
import Input from '../../components/InputView/Input';
import LineOr from '../../components/LineView/LineView';
import ButtonView from '../../components/ButtonView/buttonView';

const RegisterScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const colorMode = {
    backgroundColor: isDarkMode
      ? sharedColors.lightMode.backgroundColor
      : sharedColors.darkMode.backgroundColor,
    textColor: isDarkMode
      ? sharedColors.lightMode.textColor
      : sharedColors.darkMode.textColor,
  };

  return (
    <SafeAreaView style={[styles.container, colorMode]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colorMode.backgroundColor}
      />
      <Container width="85%">
        <Container
          height="20%"
          justifyContent="flex-end"
          alignItems="flex-start">
          <Text style={[{color: colorMode.textColor}, sharedStyles.largeText]}>
            Welcome back,
          </Text>
          <Text style={[{color: colorMode.textColor}, sharedStyles.mediumText]}>
            We are happy to see you again, Enter your email and password.
          </Text>
        </Container>
        <Container height="30%">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <ButtonView
            title="Login"
            type="green"
            onPress={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </Container>
        <TouchableOpacity style={styles.forgetpassword}>
          <Text style={[{color: colorMode.textColor}, sharedStyles.mediumText]}>
            Forget Password?
          </Text>
        </TouchableOpacity>
        <Container height="45%" justifyContent="flex-start">
          <LineOr />
          <ButtonView
            title="Create an Account"
            onPress={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </Container>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetpassword: {
    height: '5%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
