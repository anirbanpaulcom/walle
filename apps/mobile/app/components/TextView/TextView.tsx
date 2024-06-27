import React from 'react';
import {Text, StyleProp, TextStyle, useColorScheme} from 'react-native';
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
  const textStyles = getStyles(type);

  const isDarkMode = useColorScheme() === 'dark';

  const colorMode = {
    color: isDarkMode
      ? sharedColors.lightMode.textColor
      : sharedColors.darkMode.textColor,
  };

  return (
    <Text
      style={[
        textStyles.base,
        colorMode,
        textStyles[type],
        {textAlign},
        style,
      ]}>
      {children}
    </Text>
  );
};

const getStyles = (type: string) => {
  const base = {
    fontSize: 15,
    fontWeight: '600',
    width: '100%',
  };

  const styles = {
    largeBold: {
      fontSize: 30,
      fontWeight: '800',
    },
    largeLight: {
      fontSize: 30,
      fontWeight: '400',
    },
    mediumBold: {
      fontSize: 20,
      fontWeight: '900',
    },
    mediumLight: {
      fontSize: 20,
      fontWeight: '300',
    },
    smallBold: {
      fontSize: 15,
      fontWeight: '800',
    },
    smallLight: {
      fontSize: 15,
      fontWeight: '300',
    },
    extraSmallBold: {
      fontSize: 10,
      fontWeight: '500',
    },
    extraSmallLight: {
      fontSize: 10,
      fontWeight: '300',
    },
  };

  return {base, ...styles};
};

export default TextView;
