import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mustard Seed</Text>
      <Text style={styles.subtitle}>v1.0.0 — Minimal AAB-ready build</Text>
      <Text style={styles.body}>If you can read this on your phone, your build pipeline works.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101114',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24
  },
  title: { fontSize: 28, fontWeight: '700', color: 'white', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#B0B4BA', marginBottom: 16 },
  body: { fontSize: 16, color: 'white', textAlign: 'center' }
});
