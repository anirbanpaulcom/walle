import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import {getIcon} from '../../functions/functions';
import Container from '../Wrapper/Container';

interface BoxViewProps extends ViewProps {
  color?: string;
  size?: 'lg' | 'sm';
  type?: string;
  amount?: number;
  onPress?: () => void;
}

const BoxView: React.FC<BoxViewProps> = ({
  color,
  size,
  type,
  amount,
  onPress,
  ...restProps
}) => {
  const boxSize = size === 'lg' ? styles.largeBox : styles.smallBox;
  const iconPadding = size === 'lg' ? 20 : 10;

  return (
    <TouchableOpacity
      style={[styles.box, boxSize, {backgroundColor: color || '#e8e8e8'}]}
      onPress={onPress}
      {...restProps}>
      <View
        style={[
          styles.iconContainer,
          {
            padding: iconPadding,
          },
        ]}>
        {getIcon(type)}
      </View>
      <Container>
        <Text>{type}</Text>
        <Text style={styles.amountText}>{amount}</Text>
      </Container>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: 10,
    borderRadius: 25,
    margin: 3,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
  },
  smallBox: {
    width: 115,
    height: 135,
  },
  largeBox: {
    width: 170,
    height: 170,
  },
  amountText: {
    fontSize: 20,
    fontWeight: '900',
  },
});

export default BoxView;
