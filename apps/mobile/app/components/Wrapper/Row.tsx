import React from 'react';
import {View, StyleSheet} from 'react-native';

type JustifyContentType =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type AlignItemsType =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'stretch'
  | 'baseline';

export interface RowProps {
  children: React.ReactNode;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
  height?: number | string;
  width?: number | string;
  style?: object;
  backgroundColor?: string;
}

const Row = ({
  children,
  backgroundColor,
  style,
  justifyContent = 'flex-start',
  alignItems = 'center',
  width = '100%',
  height = 'auto',
}: RowProps) => {
  return (
    <View
      style={[
        styles.row,
        {backgroundColor, justifyContent, alignItems, width, height},
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default Row;
