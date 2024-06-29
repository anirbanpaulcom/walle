import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';

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

export interface RowProps extends ViewProps {
  children: React.ReactNode;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
  height?: number | string;
  width?: number | string;
  style?: object;
  backgroundColor?: string;
  gap?: number;
}

const Row = ({
  children,
  backgroundColor,
  style,
  justifyContent = 'center',
  alignItems = 'center',
  width = '100%',
  height = 'auto',
  gap = 5,
}: RowProps) => {
  return (
    <View
      style={[
        styles.row,
        {backgroundColor, justifyContent, alignItems, width, height, gap},
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
