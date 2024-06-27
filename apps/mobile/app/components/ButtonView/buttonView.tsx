import React from 'react';
import {
  Text,
  TextStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {sharedColors} from '../../constains/colors';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  type?: string;
  backgroundColor?: string;
  loading?: boolean;
  color?: string;
  fontSize?: number;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  styleText?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
}

const ButtonView = ({
  type = 'black',
  disabled = false,
  loading = false,
  fontSize = 15,
  title,
  onPress,
  backgroundColor,
  color,
  styleText,
  style,
  ...otherProps
}: IButtonProps): React.ReactElement => {
  const isblack = type === 'black';

  let textColor = isblack ? '#FFFFFF' : '#000000';
  if (color) {
    textColor = color;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.container,
        backgroundColor
          ? {backgroundColor}
          : {
              backgroundColor: isblack
                ? sharedColors.darkMode.backgroundColor
                : sharedColors.grey,
            },
        style,
        disabled && styles.disabled,
      ]}
      accessibilityLabel={title}
      {...otherProps}>
      {loading ? (
        <Text style={[styles.text, {color: textColor, fontSize}, styleText]}>
          Loading...
        </Text>
      ) : (
        <Text style={[styles.text, {color: textColor, fontSize}, styleText]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 50,
    width: '100%',
    borderRadius: 15,
    marginVertical: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.3,
  },
});

export default ButtonView;
