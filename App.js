/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00',
  },
});

const App = () => {
  const [ball, setBallY] = useState(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    })
  );
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (e, gestureState) => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: ball.x,
          dy: ball.y,
        },
      ],
      {
        listener: (e, gestureState) => {
          console.log(gestureState);
        },
      }
    ),
    onPanResponderGrant: (e, gestureState) => {
      ball.setOffset({
        x: ball.x._value,
        y: ball.y._value,
      });
      ball.setValue({
        x: 0,
        y: 0,
      });
    },
    onPanResponderRelease: () => {
      ball.flattenOffset();
    },
  });

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.ball,
          {
            transform: [
              {
                translateX: ball.x,
              },
              {
                translateY: ball.y,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default App;
