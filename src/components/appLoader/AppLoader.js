import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image
} from 'react-native';

const AppLoader = () => {
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <Image
        source={{
          uri: '/assets/splash.png'
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: '#000000'
  }
})

export default AppLoader;
