import React from 'react';

import {View} from 'react-native';

type justifyContentType =
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

export interface ContainerProps {
  children: React.ReactNode;
  alignItems?: AlignItemsType;
  justifyContent?: justifyContentType;
  height?: number | string;
  width?: number | string;
  style?: object;
  backgroundColor?: string;
}

const Container = ({
  children,
  backgroundColor,
  style,
  justifyContent = 'center',
  alignItems = 'center',
  width = '100%',
  height = 'auto',
}: ContainerProps) => {
  return (
    <View
      style={[
        {backgroundColor, justifyContent, alignItems, width, height},
        style,
      ]}>
      {children}
    </View>
  );
};

export default Container;
