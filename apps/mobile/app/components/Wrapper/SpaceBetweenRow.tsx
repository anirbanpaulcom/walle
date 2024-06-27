import React from 'react';
import {View, StyleSheet} from 'react-native';

type AlignItemsType =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'
  | 'baseline';

export interface SpaceBetweenRowProps {
  children: React.ReactNode;
  alignItems?: AlignItemsType;
  height?: number | string;
  width?: number | string;
  style?: object;
  backgroundColor?: string;
}

const SpaceBetweenRow = ({
  children,
  backgroundColor,
  style,
  alignItems = 'center',
  width = '100%',
  height = 'auto',
}: SpaceBetweenRowProps) => {
  return (
    <View
      style={[
        styles.spaceBetweenRow,
        {backgroundColor, alignItems, width, height},
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  spaceBetweenRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default SpaceBetweenRow;
