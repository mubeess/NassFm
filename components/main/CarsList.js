import React from 'react'
import { View, Text,StyleSheet, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native'
import { Avatar, FAB, Headline, List, Paragraph, Title } from 'react-native-paper';
import Antd from 'react-native-vector-icons/AntDesign'
const mobileHeight=Dimensions.get('window').height;
export default function CarsList({car}) {
    
    return (
           <View style={styles.list}>
           <Avatar.Icon style={{backgroundColor:'white'}} size={70} icon="car-connected" />
           <View style={styles.listCont}>
           <Title>{car.driver||'Sample User'}</Title>
           <Paragraph>
               longitude:{car.longitude||'111'}, latitude:{car.latitude||1111},
                 plate number:{car.plate||8888}
           </Paragraph>
           </View>
           <TouchableNativeFeedback onPress={()=>{
               console.log(car)
           }}>
           <Antd name='delete' size={24} color='black'></Antd>
           </TouchableNativeFeedback>
           </View>
    )
}
const styles=StyleSheet.create({
 
     list:{
          height:100,
          width:'95%',
          backgroundColor:'white',
          marginLeft:10,
          borderRadius:10,
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
          marginBottom:20
         

      },
      listCont:{
          flexDirection:'column',
          width:'50%',
          margin:10
      }
})