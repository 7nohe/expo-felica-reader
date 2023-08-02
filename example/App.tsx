import { Button, StyleSheet, Text, View } from 'react-native';
import * as ExpoFelicaReader from 'expo-felica-reader';
import { useState } from 'react';

export default function App() {
  const [idm, setIdm] = useState<string>();
  const onPress = async () => {
    const resulit = await ExpoFelicaReader.scan();
    setIdm(resulit);
  }
  return (
    <View style={styles.container}>
      <Button title='Scan' onPress={onPress}/>
      <Text style={{ padding: 12 }}>IDm: {idm ?? '-'}</Text>
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
