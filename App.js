/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

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
  const [ballY, setBallY] = useState(new Animated.Value(0));
  const [ballX, setBallX] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
    }).start();
  }, [ballX, ballY]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            top: ballY,
            left: ballX,
            opacity: ballY.interpolate({
              inputRange: [0, 280, 300],
              outputRange: [1, 1, 0.2],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
    </View>
  );
};

export default App;
