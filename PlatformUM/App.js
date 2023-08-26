import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Platform } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Platform: {Platform.OS}</Text>
      <Text>Version: {Platform.Version}</Text>
      <Text style={styles.header}>Hello World!</Text>

      <Button
        title="SELECT"
      />
      <StatusBar style="auto" />
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
  header: {
    fontSize: 24, // Tamaño de la fuente en puntos
    fontWeight: 'bold', // Fuente en negrita
    textAlign: 'center', // Alineación central del texto
  },
});
