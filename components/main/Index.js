import React,{useContext} from 'react'
import { View, Text } from 'react-native'
import Home from './Home'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainHome from './MainHome'
import AppContext from '../../context/App/appContext'
import { createDrawerNavigator,DrawerContentScrollView,
    DrawerItemList,DrawerItem} from '@react-navigation/drawer';
  import { Drawer, Avatar, Headline, Caption, Title, Divider,Button} from 'react-native-paper';
  import Cars from './Cars'
  import About from './About'
  import Contacts from './Contacts'

  removeValue = async () => {
   
  }
  
  function CustomDrawerContent(props) {
    const appProps=useContext(AppContext)
    const name=appProps.user.name.split('')
    return (
      <DrawerContentScrollView style={{
        backgroundColor:'#E0E0E0'
      }} {...props}>
        <View style={{
          width:'100%',
          height:200,
          backgroundColor:'rgba(44, 130, 201,0.4)',
          justifyContent:'center',
          alignItems:'center'
        }}>
         <Avatar.Text style={{backgroundColor:'white'}} size={100} label={name[0].toUpperCase()} />
         <Title>{appProps.user.name}</Title>
         <Caption style={{color:'rgba(0,0,0,0.5)'}}>{appProps.user.email}</Caption>
        </View>
        <DrawerItemList {...props} />
        <Divider></Divider>
        <Button 
        onPress={async () =>{
          try {
            await AsyncStorage.removeItem('@storage_Key')
            appProps.setLog()
            props.navigation.navigate('Home')
          } catch(e) {
            console.log('errrrrr')
          }
        
          console.log('Removedd')
        }}
        style={{
          width:'80%',
          marginLeft:'auto',
          marginRight:'auto',
          marginTop:100,
          borderRadius:10
        }}
        uppercase={false}   
        
        icon="logout"
        mode="contained" >Log Out</Button>
      </DrawerContentScrollView>
    );
  }

const Drawerr=createDrawerNavigator()
export default function Index() {
    return (
     <Drawerr.Navigator
     drawerContent={props => <CustomDrawerContent {...props} />}
      
      initialRouteName="Home">
        <Drawerr.Screen name="Home" component={MainHome} />
        <Drawerr.Screen name="My Cars" component={Cars} />
        <Drawerr.Screen name="About Us" component={About} />
        <Drawerr.Screen name="Contacts" component={Contacts} />
      </Drawerr.Navigator>
    )
}
