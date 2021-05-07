import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View, Button,Image,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppContext from '../../context/App/appContext'
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Antd from 'react-native-vector-icons/AntDesign'
import { Caption, Headline, Paragraph,Subheading,TouchableRipple,List, Title} from 'react-native-paper';

export default function App({animRef}) {
  const [isPlaying,setPlaying]=useState(true)
  const mobileHeight=Dimensions.get('window').height;
  const appProps=useContext(AppContext)
  const renderContent = () => (
      <View   style={[styles.container,{height: mobileHeight}]}>
      <TouchableOpacity onPress={() => sheetRef.current.snapTo(2)}  style={styles.icon}>
      <Antd name='arrowdown' size={20} color='white'></Antd>
      </TouchableOpacity>
      <View style={styles.dash}></View>
      <Subheading style={{
        textAlign: 'center'
      }}>Cars List</Subheading>
    <View>
    {/* <TouchableOpacity onPress={()=>{
      animRef(9.333333,12.500000),sheetRef.current.snapTo(2)
    }}>
      <List.Item
    title="Adamu Ibrahim"
    description="563t90"
    left={props => <List.Icon {...props} icon="car-connected" />}
  />
      </TouchableOpacity> */}
      {
        appProps.cars.length&&(
         appProps.cars.map((car,ind)=>(
          <TouchableOpacity key={ind} onPress={()=>{
            animRef(car.latitude||9.072264+ind,car.longitude||7.491302+ind),sheetRef.current.snapTo(2)
          }}>
            <List.Item
          title={car.driver||'1st Car'}
          description={car.plate||'1st car plate number'}
          left={props => <List.Icon {...props} icon="car-connected" />}
        />
            </TouchableOpacity>
         ))
        )
      }

     
    </View>

    
    </View>
  );

  const sheetRef = React.useRef(null);


  return (
    <>
    <TouchableRipple  rippleColor="rgba(0, 0, 0, .32)" onPress={() => sheetRef.current.snapTo(0)}>
    <View style={styles.maincon}>
      <View style={styles.iconn}>
        <Antd name='arrowup' size={20} color='white'></Antd>
      </View>
      </View>
    </TouchableRipple>
      
      <BottomSheet
        ref={sheetRef}
        snapPoints={['60%','0%', '0%']}
        borderRadius={10}
        renderContent={renderContent}
       
      />
    </>
  );
}
const styles=StyleSheet.create({
container:{
  backgroundColor: 'rgba(255,255,255,0.9)',
  padding: 0,
  margin: 10,
  marginBottom:0,
  borderRadius: 10
  
  
},
icon:{
       backgroundColor:'rgba(44, 130, 201,0.4)',
        height:40,
        width:40,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius:50,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
},
dash:{
  width:'100%',
  height:2,
  backgroundColor: 'rgba(44, 130, 201,0.8)',
  marginTop: 10
  
},
maincon:{
  backgroundColor: 'rgba(44, 130, 201,0.8)',
  padding: 5,
  height: 50,
  flexDirection: 'row',
  justifyContent:'center',

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