import { 
  StyleSheet, 
  SafeAreaView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from 'react-native';
import {
  useFonts
} from 'expo-font'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import AppShell from './AppShell'
import {
  Theme
} from './src/styles/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans: require('./assets/fonts/NotoSans-Regular.ttf'),
    NotoSansBlack: require('./assets/fonts/NotoSans-Black.ttf'),
    NotoSansBlackItalic: require('./assets/fonts/NotoSans-BlackItalic.ttf'),
    NotoSansBold: require('./assets/fonts/NotoSans-Bold.ttf'),
    NotoSansBoldItalic: require('./assets/fonts/NotoSans-BoldItalic.ttf'),
    NotoSansExtraBold: require('./assets/fonts/NotoSans-ExtraBold.ttf'),
    NotoSansExtraBoldItalic: require('./assets/fonts/NotoSans-ExtraBoldItalic.ttf'),
    NotoSansExtraLight: require('./assets/fonts/NotoSans-ExtraLight.ttf'),
    NotoSansExtraLightItalic: require('./assets/fonts/NotoSans-ExtraLightItalic.ttf'),
    NotoSansItalic: require('./assets/fonts/NotoSans-Italic.ttf'),
    NotoSansLight: require('./assets/fonts/NotoSans-Light.ttf'),
    NotoSansLightItalic: require('./assets/fonts/NotoSans-LightItalic.ttf'),
    NotoSansMedium: require('./assets/fonts/NotoSans-Medium.ttf'),
    NotoSansMediumItalic: require('./assets/fonts/NotoSans-MediumItalic.ttf'),
    NotoSansSemiBold: require('./assets/fonts/NotoSans-SemiBold.ttf'),
    NotoSansSemiBoldItalic: require('./assets/fonts/NotoSans-SemiBoldItalic.ttf'),
    NotoSansThin: require('./assets/fonts/NotoSans-Thin.ttf'),
    NotoSansThinItalic: require('./assets/fonts/NotoSans-ThinItalic.ttf'),
  })

  return (
    <Provider
    store={store}
    >
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback>
          <SafeAreaView>
            {
              !fontsLoaded ? 
              <ActivityIndicator 
              size="large"
              color={Theme.palette.light.primary}
              /> 
              : <AppShell />
            } 
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
