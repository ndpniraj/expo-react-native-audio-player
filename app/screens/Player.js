import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Screen from '../components/Screen';
import color from '../misc/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import PlayerButton from '../components/PlayerButton';

const { width } = Dimensions.get('window');

const Player = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.audioCount}>1 / 99</Text>
        <View style={styles.midBannerContainer}>
          <MaterialCommunityIcons
            name='music-circle'
            size={300}
            color={color.ACTIVE_BG}
          />
        </View>
        <View style={styles.audioPlayerContainer}>
          <Text numberOfLines={1} style={styles.audioTitle}>
            Audio File Name
          </Text>
          <Slider
            style={{ width: width, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor={color.FONT_MEDIUM}
            maximumTrackTintColor={color.ACTIVE_BG}
          />
          <View style={styles.audioControllers}>
            <PlayerButton iconType='PREV' />
            <PlayerButton
              onPress={() => console.log('playing')}
              style={{ marginHorizontal: 25 }}
              iconType='PLAY'
            />
            <PlayerButton iconType='NEXT' />
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  audioControllers: {
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
  },
  audioCount: {
    textAlign: 'right',
    padding: 15,
    color: color.FONT_LIGHT,
    fontSize: 14,
  },
  midBannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioTitle: {
    fontSize: 16,
    color: color.FONT,
    padding: 15,
  },
});

export default Player;
