import React from 'react';
import {
  Text,
  StyleProp,
  TextStyle,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {sharedColors} from '../../constains/colors';

interface ICustomTextProps {
  type:
    | 'largeBold'
    | 'largeLight'
    | 'mediumBold'
    | 'mediumLight'
    | 'smallBold'
    | 'smallLight'
    | 'extraSmallBold'
    | 'extraSmallLight';
  textAlign?: 'left' | 'center' | 'right';
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
  children: React.ReactNode;
}

const TextView = ({
  type,
  textAlign = 'center',
  style,
  children,
}: ICustomTextProps): React.ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';

  const colorMode = {
    color: isDarkMode
      ? sharedColors.lightMode.textColor
      : sharedColors.darkMode.textColor,
  };

  return (
    <Text style={[styles.base, styles[type], colorMode, {textAlign}, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 15,
    fontWeight: '600' as '600',
    width: '100%',
  },
  largeBold: {
    fontSize: 30,
    fontWeight: '800' as '800',
  },
  largeLight: {
    fontSize: 30,
    fontWeight: '400' as '400',
  },
  mediumBold: {
    fontSize: 20,
    fontWeight: '900' as '900',
  },
  mediumLight: {
    fontSize: 20,
    fontWeight: '300' as '300',
  },
  smallBold: {
    fontSize: 15,
    fontWeight: '800' as '800',
  },
  smallLight: {
    fontSize: 15,
    fontWeight: '300' as '300',
  },
  extraSmallBold: {
    fontSize: 10,
    fontWeight: '500' as '500',
  },
  extraSmallLight: {
    fontSize: 10,
    fontWeight: '300' as '300',
  },
});

export default TextView;
