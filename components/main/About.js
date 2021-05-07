import React from 'react'
import { View, Text,StyleSheet, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native'
import { Avatar, FAB, Headline, List, Paragraph, Title } from 'react-native-paper';
import Antd from 'react-native-vector-icons/AntDesign'
import CarsList from './CarsList'
const mobileHeight=Dimensions.get('window').height;
export default function About({navigation}) {
    
    return (
        <View style={styles.container}>
            <View style={styles.nav}>
    <FAB
     style={styles.fab2}
    small
    icon="menu"
    onPress={() => {
       navigation.openDrawer()
    }}
  />
  <Title style={{
      textAlign:'center',
      color:'white',
      marginLeft:'auto',
      marginRight:'auto'
  }}>About</Title>
            </View>
    <View style={styles.main}>
         <Paragraph style={{
             marginTop:20,
             marginRight:20,
             marginLeft:20,
             textAlign:'justify',
             fontSize:18,
             color:'rgba(0,0,0,0.8)'
         }}>
       The idea of this app came as a result of indepth and 
       thorogh thought of problems in our locality,
        and seeing way farward of countering these problems. We 
        will continue to update more features in the app for more user 
        experience. 
        <Headline>HAPPY TRACKING.</Headline>  
        </Paragraph> 
     </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E0E0E0'
    },
    nav:{
        height:100,
        width:'100%',
        backgroundColor:'rgba(44, 130, 201,0.9)',
        position:'relative',
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center'
    },
    main:{
        backgroundColor:'rgba(0, 0,0,0)',
        flex:1,
        alignItems:'center'
    },
    fab2: {
        position: 'relative',
        margin:10,
        left: 10,
        top:0,
        backgroundColor:'white'
      },
     
})