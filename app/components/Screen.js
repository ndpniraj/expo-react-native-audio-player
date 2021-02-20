import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import color from '../misc/color';

const Screen = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.APP_BG,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Screen;
