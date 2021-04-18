import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,StatusBar,Dimensions,Image,ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Headline, Paragraph, Subheading, Title } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ListNews from './ListNews'
import TopStories from './TopStories'
import Social from './Social'
import Bottom from './Bottom'
import SoundPlayer from 'react-native-sound-player'
export default function MainHome({navigation}) {
    const [PlayinSound,setPlaying]=useState({})
 function  playSound(params) {
        try {
            // play the file tone.mp3
            SoundPlayer.playSoundFile('fatiha', 'mp3'),setPlaying(SoundPlayer)

            // or play from url
            // SoundPlayer.playUrl('https://res.cloudinary.com/nutscoders/video/upload/v1617984204/001_-_Surat_-_Al-Fatiha_xvzx0u.mp3')
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    function  pauseSound(params) {
        try {
            // play the file tone.mp3
            PlayinSound.pause()

            // or play from url
            // SoundPlayer.playUrl('https://res.cloudinary.com/nutscoders/video/upload/v1617984204/001_-_Surat_-_Al-Fatiha_xvzx0u.mp3')
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    function  contineSound(params) {
        try {
            // play the file tone.mp3
            PlayinSound.play()

            // or play from url
            // SoundPlayer.playUrl('https://res.cloudinary.com/nutscoders/video/upload/v1617984204/001_-_Surat_-_Al-Fatiha_xvzx0u.mp3')
        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }
    useEffect(()=>{
    playSound()
    },[])
    return ( 
        <>
        <ScrollView style={styles.cont}>
            <StatusBar backgroundColor="skyblue"
             hidden={false}></StatusBar>
             <View style={styles.head}>
                <TouchableOpacity onPress={()=>{
                    navigation.openDrawer()
                }} style={styles.optIco}><AntDesign name='setting' size={24} color='white'></AntDesign></TouchableOpacity>
                <View style={styles.subHead}>
                    <Image style={styles.logo}
                     source={require('../../assets/nass.png')}></Image>
                     <Headline style={{color:'white'}}>| NASS Fm</Headline>
                </View>
                 </View>
            <View style={styles.message}>
            <Subheading>On-Demand</Subheading>
            <Button>see all...</Button>
            </View>
            <ListNews playSound={playSound}></ListNews>
            <ListNews playSound={playSound}></ListNews>
            <ListNews playSound={playSound}></ListNews>
            <View style={styles.message}>
            <Subheading>Top-Stories</Subheading>
            <Button onPress={()=>{
               
                playSound()
            }}>see all...</Button>
            </View>
            <TopStories></TopStories>
            <TopStories></TopStories>
            <TopStories></TopStories>
            <View style={styles.message}>
            <Subheading>Social</Subheading>
            <Button>see all...</Button>
            </View>
            <Social></Social>
        </ScrollView>
         <Bottom pause={pauseSound} play={contineSound}></Bottom>
         </>
    )
}
const styles=StyleSheet.create({
cont:{
    backgroundColor:'white',
    flex: 1
},
head:{
    height: 120,
    backgroundColor:'skyblue',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems: 'flex-end',
},
optIco:{
  marginTop:15,
  marginRight: 20
},
logo:{
    width:40,
    height:40
},
subHead:{
    marginTop:20,
    marginRight:'auto',
    flexDirection:'row',
    marginLeft:'auto',
},
message:{
    height:100,
    width:'100%',
    padding:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
}
})