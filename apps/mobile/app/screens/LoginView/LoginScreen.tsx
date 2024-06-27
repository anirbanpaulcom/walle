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

const LoginScreen = () => {
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
          height="15%"
          justifyContent="flex-end"
          alignItems="flex-start">
          <Text style={[{color: colorMode.textColor}, sharedStyles.largeText]}>
            Create an account
          </Text>
          <Text style={[{color: colorMode.textColor}, sharedStyles.mediumText]}>
            Create your account,it takes less than a minite, Enter your email
            and password.
          </Text>
        </Container>
        <Container height="30%">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <ButtonView title="Create an Account" type="green" />
        </Container>
        <Container height="55%" justifyContent="flex-start">
          <LineOr />
          <ButtonView title="Continue With Phone Number" />
          <ButtonView title="Continue With Google" />
          <ButtonView title="Continue With Facebook" />
          <ButtonView title="Continue With Apple" />
          <Container height="15%" style={styles.row}>
            <Text
              style={[{color: colorMode.textColor}, sharedStyles.mediumText]}>
              Already have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  {color: sharedColors.greenishYellow},
                  sharedStyles.mediumText,
                ]}>
                Login
              </Text>
            </TouchableOpacity>
          </Container>
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
  row: {
    flexDirection: 'row',
  },
});

export default LoginScreen;
