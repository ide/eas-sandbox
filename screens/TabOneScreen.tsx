import * as Updates from 'expo-updates';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { MonoText } from '../components/StyledText';

export default function TabOneScreen() {
  const manifest = Updates.manifest;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current update</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View
          style={[styles.codeHighlightContainer, styles.updateInfo]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{manifest}</MonoText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  updateInfo: {
    marginVertical: 7,
  },
});
