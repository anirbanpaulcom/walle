import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';

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

export interface ContainerProps extends ViewProps {
  children: React.ReactNode;
  alignItems?: AlignItemsType;
  justifyContent?: justifyContentType;
  height?: number | string;
  width?: number | string;
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
  ...restProps
}: ContainerProps) => {
  return (
    <View
      style={[
        {
          backgroundColor,
          justifyContent,
          alignItems,
          width: width as ViewStyle['width'],
          height: height as ViewStyle['height'],
        },
        style,
      ]}
      {...restProps}>
      {children}
    </View>
  );
};

export default Container;
