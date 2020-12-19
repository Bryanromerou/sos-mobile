import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import HomeStack from './routes/HomeStack';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader/>
      <HomeStack style={{width:"100%"}}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87AB7F',
    margin: 0,
    padding: 0
  },
});
