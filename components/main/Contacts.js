import React from 'react'
import { View, Text,StyleSheet, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native'
import { Avatar, FAB, Headline, List, Paragraph, Title } from 'react-native-paper';
import Antd from 'react-native-vector-icons/AntDesign'
import CarsList from './CarsList'
const mobileHeight=Dimensions.get('window').height;
export default function Contacts({navigation}) {
    
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
             fontSize:23,
             color:'rgba(0,0,0,0.8)'
         }}>
        lorem jhdhdn snshs ammaka akkaak ajjauua mkakka nnahha amama ajajja annnaa
        ajjahua kkaaka akaka akakna jakka aakka  ajka aka  ajaka akkaaja kamajka aka aa
        nanbah  jaajaiuabnamka 
        kamjak     
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