import React from 'react';
import {Text, StyleSheet, PanResponder, Animated} from 'react-native';

const SwipeableButton = () => {
  const pan = React.useRef(new Animated.ValueXY()).current;

  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, {dx: pan.x}], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (_, gesture) => {
          if (gesture.dx > 120) {
            // Threshold for considering it a swipe to the right
            // Navigate to the 2nd screen
          } else {
            // Reset position if not swiped enough
            Animated.spring(pan, {
              toValue: {x: 0, y: 0},
              useNativeDriver: false,
            }).start();
          }
        },
      }),
    [pan],
  );

  return (
    <Animated.View
      style={[styles.button, {transform: [{translateX: pan.x}]}]}
      {...panResponder.panHandlers}>
      <Text style={styles.buttonText}>Swipe me!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '25%',
    borderRadius: 20,
    margin: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default SwipeableButton;
