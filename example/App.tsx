import { StyleSheet, Text, View } from 'react-native';

import * as ExpoFelicaReader from 'expo-felica-reader';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoFelicaReader.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
