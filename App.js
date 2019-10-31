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

  useEffect(() => {
    Animated.decay(ballY, {
      velocity: 0.5,
    }).start();
  }, [ballY]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, { top: ballY }]} />
    </View>
  );
};

export default App;
