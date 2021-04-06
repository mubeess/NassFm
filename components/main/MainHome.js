import React from 'react'
import { View, Text,StyleSheet,StatusBar,Dimensions,Image,ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Headline, Paragraph, Subheading, Title } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ListNews from './ListNews'
export default function MainHome() {
    return ( 
        <ScrollView style={styles.cont}>
            <StatusBar backgroundColor="skyblue"
             hidden={false}></StatusBar>
             <View style={styles.head}>
                <TouchableOpacity style={styles.optIco}><AntDesign name='setting' size={24} color='white'></AntDesign></TouchableOpacity>
                <View style={styles.subHead}>
                    <Image style={styles.logo}
                     source={require('../../assets/nass.png')}></Image>
                     <Headline style={{color:'white'}}>| NASS Fm</Headline>
                </View>
                 </View>
            <ListNews></ListNews>
            <ListNews></ListNews>
            <ListNews></ListNews>
            <ListNews></ListNews>
            <ListNews></ListNews>
            <Text>Main Home</Text>
        </ScrollView>
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
}
})