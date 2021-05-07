import React,{useState,useEffect} from 'react'
import { View, Text,PermissionsAndroid,StyleSheet,StatusBar,SafeAreaView,Image} from 'react-native'
import {Button,Headline}from 'react-native-paper'
import SplashScreen from 'react-native-splash-screen'
import Onboarding from 'react-native-onboarding-swiper';



export default function Onboard({navigation}) {
  const [dynamic,setDyn]=useState('#67d3aa')
  useEffect(()=>{
    SplashScreen.hide();
  },[])
    return (
      <>
      <StatusBar  backgroundColor="white" hidden={false}></StatusBar>
     <Onboarding
     onDone={()=>{navigation.replace('Register')}}

     onSkip={()=>{navigation.replace('Register')}}

     
    
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/tr.png')} />,
      title: 'Track Your Vehicles',
      subtitle: `Get to know your vehicle's location with our tracker app`,
    },
    {
      backgroundColor: 'rgba(44, 130, 201,0.8)',
      image: <Image source={require('../../assets/mapping.png')} />,
      title: 'Locate On Map',
      subtitle: `View all your tracked vehicles on map`,
    }
  ]}
/>

 </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    font:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        height:60,
        marginTop:20,
        textAlign:'center',

    },
    logo:{
        width:200,
        height:200,
        alignSelf:'center',
    },
    msg:{
        fontWeight:'200',
        fontSize: 25,
        color:'white',
        marginTop:40,
        alignSelf:'center',
    },
    btn:{
        marginTop:120,
        
    }
  });