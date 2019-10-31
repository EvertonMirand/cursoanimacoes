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
    Animated.loop(
      Animated.sequence([
        Animated.timing(ballY, {
          toValue: 200,
          duration: 500,
        }),
        Animated.delay(200),
        Animated.timing(ballX, {
          toValue: 200,
          duration: 500,
        }),
        Animated.delay(200),
        Animated.timing(ballY, {
          toValue: 0,
          duration: 500,
        }),
        Animated.delay(200),
        Animated.timing(ballX, {
          toValue: 0,
          duration: 500,
        }),
      ]),
      {
        iterations: 2,
      }
    ).start();
  }, [ballX, ballY]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, { top: ballY, left: ballX }]} />
    </View>
  );
};

export default App;
