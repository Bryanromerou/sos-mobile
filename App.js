import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import HomeStack from './routes/HomeStack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home/> */}
      <HomeStack style={{width:"100%"}}/>
      {/* <Statistics/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#779BE7',
    margin: 0,
    padding: 0
  },
});
