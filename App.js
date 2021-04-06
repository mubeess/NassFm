import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import Personal from './components/register/Personal'
import Contact from './components/register/Contact'
import Onboard from './components/register/Onboard'
import Main from './components/main/Index'
const Stack = createStackNavigator();

 function App() {
  return (
   <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen  name="Onboard" component={Onboard}/>
    <Stack.Screen name="Home" component={Personal} />
    <Stack.Screen name="Main" component={Main} />
  </Stack.Navigator>
  )
}

export default App

const styles = StyleSheet.create({
  bottom: {
    position: 'relative',
  },
});