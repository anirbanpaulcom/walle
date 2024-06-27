import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  style?: any;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={'#999997'}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderColor: '#e4e6e1',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: 'black',
    fontWeight: '400',
  },
});

export default Input;
