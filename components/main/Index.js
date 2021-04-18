import React from 'react'
import { View, Text } from 'react-native'
import Home from './Home'
import MainHome from './MainHome'
import { createDrawerNavigator } from '@react-navigation/drawer';


function App() {
    return (
     <View>
         <Text>Indexxxxxx</Text>
     </View>
    )
}
const Drawer=createDrawerNavigator()
export default function Index() {
    return (
     <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainHome} />
      </Drawer.Navigator>
    )
}
