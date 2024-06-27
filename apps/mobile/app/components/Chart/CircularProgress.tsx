import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

interface CircularProgressProps {
  data: {color: string; amount: number}[];
}

const CircularProgress: React.FC<CircularProgressProps> = ({data}) => {
  const radius = 100;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const totalAmount = data.reduce((sum, item) => sum + item.amount, 0);

  let offset = 0;
  const gap = 15;

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        {data.map((item, index) => {
          const percentage = (item.amount / totalAmount) * 100;
          const strokeLength = (percentage / 100) * circumference - gap;
          const strokeDasharray = `${strokeLength} ${circumference}`;
          const strokeDashoffset = offset;
          offset -= (percentage / 100) * circumference;

          return (
            <Circle
              key={index}
              cx={radius}
              cy={radius}
              r={radius - strokeWidth / 2}
              stroke={item.color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          );
        })}
      </Svg>
      <View style={styles.centerTextContainer}>
        <Text style={styles.centerText}>{`$${totalAmount}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  centerTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CircularProgress;
