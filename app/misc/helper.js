import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAudioForNextOpening = async (audio, index) => {
  await AsyncStorage.setItem('previousAudio', JSON.stringify({ audio, index }));
};
