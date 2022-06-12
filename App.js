import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Theme from './src/constants/Theme';
import {
  Home
} from './src/views/index'

export default function App() {

  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar
      translucent
      animated
      style='auto'
      />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 8,
    },
  text: {
    color: Theme.colors.dark.onSurface
  },
  list:{
    marginVertical: 8,
    width: Dimensions.get('window').width,
    height: 'auto',
    flexGrow: 0
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: Theme.colors.dark.surface,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
