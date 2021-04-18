import React,{useState,useEffect} from 'react'
import { View, Text,PermissionsAndroid,StyleSheet,StatusBar,SafeAreaView,Image} from 'react-native'
import {Button,Headline}from 'react-native-paper'
import Onboarding from 'react-native-onboarding-swiper';


const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location permission",
          message:"The app wants to use yor location ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
export default function Onboard({navigation}) {
  const [dynamic,setDyn]=useState('#67d3aa')
    return (
     <Onboarding
     onDone={()=>{navigation.navigate('Register')}}

     onSkip={()=>{navigation.navigate('Register')}}
    
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../../assets/tr.png')} />,
      title: 'Track Your Vehicles',
      subtitle: `Get to know your vehicle's location with our tracker app`,
    },
    {
      backgroundColor: '#67d3aa',
      image: <Image source={require('../../assets/mapping.png')} />,
      title: 'Locate On Map',
      subtitle: `View all your tracked vehicles on map`,
    }
  ]}
/>

 
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