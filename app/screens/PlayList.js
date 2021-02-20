import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PlayList = () => {
  return (
    <View style={styles.container}>
      <Text>Play List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayList;
