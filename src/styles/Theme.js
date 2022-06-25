import {
  StyleSheet
} from 'react-native';
import Metrics from './Metrics'

const Theme = StyleSheet.create({
  palette:{
    light: {
      primary: '#ea526f',
      secondary: '#E76B74',
      tertiary: '#d7af70',
      neutral: '#FFFAE3',
      surface: '#F4FFF8',
      textPrimary: '#FAFAFA',
      textSecondary: '#EFD6AC',
      textTertiary: '#FFFAE3',
      textNeutral: '#8BAAAD',
      borderColor: '#00bcd4',
      white: '#FCFCFC',
      black: '#04151F',
      darkGray: '#333232',
      lightGray: '#585b56',
    },
    dark: {
      primary: '#ea526f',
      secondary: '#E76B74',
      tertiary: '#d7af70',
      neutral: '#00bcd4',
      surface: '#F4FFF8',
      textPrimary: '#FAFAFA',
      textSecondary: '#EFD6AC',
      textTertiary: '#FFFAE3',
      textNeutral: '#8BAAAD',
      borderColor: '#00bcd4',
      white: '#FCFCFC',
      black: '#04151F',
      darkGray: '#333232',
      lightGray: '#585b56',
    }
  },
  fonts: {
    displayLarge: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (57/365),
      lineHeight: Metrics.screenWidth * (64/365),
      letterSpacing: 0,
    },
    displayMedium: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (45/365),
      lineHeight: Metrics.screenWidth * (52/365),
      letterSpacing: 0,
    },
    displaySmall: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (36/365),
      lineHeight: Metrics.screenWidth * (44/365),
      letterSpacing: 0,
    },
    headlineLarge: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (32/365),
      lineHeight: Metrics.screenWidth * (40/365),
      letterSpacing: 0,
    },
    headlineMedium: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (28/365),
      lineHeight: Metrics.screenWidth * (36/365),
      letterSpacing: 0
    },
    headlineSmall: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (24/365),
      lineHeight: Metrics.screenWidth * (32/365),
      letterSpacing: 0
    },
    titleLarge: {
      fontFamily: 'NotoSansMedium',
      fontSize: Metrics.screenWidth * (22/365),
      lineHeight: Metrics.screenWidth * (28/365),
      letterSpacing: 0
    },
    titleMedium: {
      fontFamily: 'NotoSansMedium',
      fontSize: Metrics.screenWidth * (16/365),
      lineHeight: Metrics.screenWidth * (24/365),
      letterSpacing: Metrics.screenWidth * (0.15/365),
    },
    titleSmall: {
      fontFamily: 'NotoSansMedium',
      fontSize: Metrics.screenWidth * (14/365),
      lineHeight: Metrics.screenWidth * (20/365),
      letterSpacing: Metrics.screenWidth * (0.1/365),
    },
    labelLarge: {
      fontFamily: 'NotoSansMedium',
      fontSize: Metrics.screenWidth * (14/365),
      lineHeight: Metrics.screenWidth * (20/365),
      letterSpacing: Metrics.screenWidth * (0.1/365),
    },
    labelMedium: {
      fontFamily: 'NotoSansMedium',
      fontSize: Metrics.screenWidth * (12/365),
      lineHeight: Metrics.screenWidth * (16/365),
      letterSpacing: Metrics.screenWidth * (0.5/365),
    },
    labelSmall: {
      fontFamily: 'NotoSansMedium',
      fontSize: Metrics.screenWidth * (11/365),
      lineHeight: Metrics.screenWidth * (16/365),
      letterSpacing: Metrics.screenWidth * (0.5/365),
    },
    bodyLarge: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (16/365),
      lineHeight: Metrics.screenWidth * (24/365),
      letterSpacing: Metrics.screenWidth * (0.15/365),
    },
    bodyMedium: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (14/365),
      lineHeight: Metrics.screenWidth * (20/365),
      letterSpacing: Metrics.screenWidth * (0.25/365),
    },
    bodySmall: {
      fontFamily: 'NotoSans',
      fontSize: Metrics.screenWidth * (12/365),
      lineHeight: Metrics.screenWidth * (16/365),
      letterSpacing: Metrics.screenWidth * (0.4/365),
    },
  },
})

export default Theme;