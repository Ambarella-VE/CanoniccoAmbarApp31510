import React from 'react';
import {
  View, 
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';

const AppShell = () => {
  return (
    <View style={styles.appShellContainer}>
      <Text>AppShell</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appShellContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  }
})

export default AppShell;
