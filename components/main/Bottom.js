import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Antd from 'react-native-vector-icons/AntDesign'
import { Headline, Paragraph } from 'react-native-paper';

export default function App({pause,play}) {
  const [isPlaying,setPlaying]=useState(true)
  const renderContent = () => (
      <View   style={styles.container}>
      <View style={styles.icon}></View>
      <View style={styles.dash}></View>
      <View style={styles.details}>
      <Image style={styles.logo}
          source={require('../../assets/nass.png')}></Image>
        <View>
          <Headline style={{
            color:'white',
            marginTop:5,
            textAlign: 'center',
          }}>Shirin Safe</Headline>
          <TouchableOpacity onPress={()=>{
            isPlaying? (pause(),setPlaying(false)):(play(),setPlaying(true))
          }} style={{
            alignSelf: 'center',
            marginTop:10
          }}>
         {isPlaying?( <Antd name='pause' size={25} color='white'></Antd>):( <Antd name='play' size={25} color='white'></Antd>)}
          </TouchableOpacity>
        <Text style={{
          textAlign: 'center',
          color: 'rgba(255,255,255,0.7)'
        }}>
        lkajjhg gaga gafya agajja agajaga avvaffajaaffaj  aggafafaghagtarr
        </Text>
        </View>
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);


  return (
    <>
    <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
    <View style={styles.maincon}>
      <View style={styles.iconn}>
        <Antd name='play' size={20} color='white'></Antd>
      </View>
      <Text style={{
        color: 'white',
        fontSize:14,
        fontWeight:'bold',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft:20
      }}>Shirin safe</Text>
      </View>
    </TouchableOpacity>
      
      <BottomSheet
        ref={sheetRef}
        snapPoints={[200,0, 0]}
        borderRadius={10}
        renderContent={renderContent}
       
      />
    </>
  );
}
const styles=StyleSheet.create({
container:{
  backgroundColor: 'rgba(0,120,170,0.9)',
  padding: 0,
  height: 200,
  
  
},
icon:{
       backgroundColor:'#f9f9f9',
        height:5,
        width:50,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius:20,
        marginTop: 20
},
dash:{
  width:'100%',
  height:2,
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginTop: 10
  
},
maincon:{
  backgroundColor: 'skyblue',
  padding: 5,
  height: 50,
  flexDirection: 'row',

},
iconn:{
  width: 40,
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.5)',
  borderRadius:50,
  justifyContent: 'center',
  alignItems: 'center',
},
details:{
  width: '80%',
  height:150,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop:'auto',
  marginBottom: 'auto',
  flexDirection:'row',
},
logo:{
  width:100,
  height:100,
  marginTop:'auto',
  marginBottom: 'auto',
}
});