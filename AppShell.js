import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View, 
  StyleSheet,
} from 'react-native';
import AppNavigator from './src/navigation/index';

const AppShell = () => {

  return (
    <View style={styles.container}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({})

export default AppShell;
