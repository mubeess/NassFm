import React,{useState,useEffect} from 'react'
import { View, Text,PermissionsAndroid,StyleSheet,StatusBar,SafeAreaView,Image} from 'react-native'
import {Button,Headline}from 'react-native-paper'


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
    useEffect(()=>{
     requestCameraPermission()
    },[])
    return (
        <SafeAreaView style={styles.container}>
        <View>
            <StatusBar
             backgroundColor="skyblue"
             hidden={false} />
            <Text style={styles.font}>NASS Fm.</Text>
            <Image
             style={styles.logo}
             source={require('../../assets/music.png')}
           />
           <Text style={styles.msg}>Programs Scheduled!!</Text>

    <Button style={styles.btn}  
    color='white' icon="arrow-right-circle"
    mode="contained" 
    onPress={() => navigation.replace('Home')}>
     Get Started
  </Button>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      position: 'relative',
      display:'flex',
      alignItems: 'center',
      flex:1,
      backgroundColor:'skyblue',
      padding:20
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