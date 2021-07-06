import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import { selectAudio } from '../misc/audioController';
import color from '../misc/color';
import AudioListItem from '../components/AudioListItem';
import { AudioContext } from '../context/AudioProvider';

const PlayListDetail = props => {
  const context = useContext(AudioContext);
  const playList = props.route.params;
  const playAudio = async audio => {
    await selectAudio(audio, context, {
      activePlayList: playList,
      isPlayListRunning: true,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{playList.title}</Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={playList.audios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <AudioListItem
              title={item.filename}
              duration={item.duration}
              isPlaying={context.isPlaying}
              activeListItem={item.id === context.currentAudio.id}
              onAudioPress={() => playAudio(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  listContainer: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: 'bold',
    color: color.ACTIVE_BG,
  },
});

export default PlayListDetail;
