import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
})

export default AppLoader;
