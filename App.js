import {
  useFonts
} from 'expo-font'
import { 
  StyleSheet, 
  StatusBar,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  SafeAreaView
} from 'react-native';
import {
  AppLoader,
} from './src/components/index.js'
import AppShell from './AppShell';

export default function App() {
  let [fontsLoaded] = useFonts({
    NotoSansBlack: require('./assets/fonts/NotoSans-Black.ttf'),
    NotoSansBlackItalic: require('./assets/fonts/NotoSans-BlackItalic.ttf'),
    NotoSansBold: require('./assets/fonts/NotoSans-Bold.ttf'),
    NotoSansBoldItalic: require('./assets/fonts/NotoSans-BoldItalic.ttf'),
    NotoSansExtraBold: require('./assets/fonts/NotoSans-ExtraBold.ttf'),
    NotoSansExtraBoldItalic: require('./assets/fonts/NotoSans-ExtraBoldItalic.ttf'),
    NotoSansExtraLight: require('./assets/fonts/NotoSans-ExtraLight.ttf'),
    NotoSansItalic: require('./assets/fonts/NotoSans-Italic.ttf'),
    NotoSansLight: require('./assets/fonts/NotoSans-Light.ttf'),
    NotoSansLightItalic: require('./assets/fonts/NotoSans-LightItalic.ttf'),
    NotoSansMedium: require('./assets/fonts/NotoSans-Medium.ttf'),
    NotoSansMediumItalic: require('./assets/fonts/NotoSans-MediumItalic.ttf'),
    NotoSans: require('./assets/fonts/NotoSans-Regular.ttf'),
    NotoSansSemiBold: require('./assets/fonts/NotoSans-SemiBold.ttf'),
    NotoSansSemiBoldItalic: require('./assets/fonts/NotoSans-SemiBoldItalic.ttf'),
    NotoSansThin: require('./assets/fonts/NotoSans-Thin.ttf'),
    NotoSansThinItalic: require('./assets/fonts/NotoSans-ThinItalic.ttf')
  });


  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback>
        <SafeAreaView>
          <StatusBar translucent={true} />
          {
            !fontsLoaded ? <AppLoader /> : <AppShell />
          }
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
