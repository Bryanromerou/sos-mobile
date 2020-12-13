import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Statistics from './pages/Statistics';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home/> */}
      <Statistics/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#779BE7',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },
});
