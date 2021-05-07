import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';
import SplashScreen from 'react-native-splash-screen'

import AppState from './context/App/appState'


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(44, 130, 201,1)',
    accent: '#f1c40f',
  },
};
export default function Main(props) {
  return (
    <AppState>
    <NavigationContainer>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
    </NavigationContainer>
    </AppState>
  );
}

AppRegistry.registerComponent(appName, () => Main);