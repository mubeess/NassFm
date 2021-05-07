import React,{useContext} from 'react'
import { View, Text,StyleSheet, ScrollView, Dimensions, TouchableNativeFeedback } from 'react-native'
import { Avatar, FAB, Headline, List, Paragraph, Title } from 'react-native-paper';
import Antd from 'react-native-vector-icons/AntDesign'
import CarsList from './CarsList'
import AppContext from '../../context/App/appContext'
const mobileHeight=Dimensions.get('window').height;
export default function Cars({navigation}) {
    const appProps=useContext(AppContext)
    
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
      color:'white'
  }}>My Cars</Title>
            </View>
    <ScrollView style={styles.main}>
          
    {
        appProps.cars.length&&(
         appProps.cars.map((car,ind)=>(
           <CarsList car={car} key={ind}></CarsList>
    
         ))
        )
      }


     </ScrollView>
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
        position:'relative'
    },
    main:{
        position:'absolute',
        flex:1,
        backgroundColor:'rgba(0, 0,0,0)',
        width:'90%',
        height:mobileHeight-100,
        marginTop:60,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
        padding:10
    },
    fab2: {
        position: 'absolute',
        margin:10,
        left: 10,
        top:0,
        backgroundColor:'white'
      },
      list:{
          height:100,
          width:'95%',
          backgroundColor:'white',
          marginLeft:10,
          borderRadius:10,
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
         

      },
      listCont:{
          flexDirection:'column',
          width:'50%',
          margin:10
      }
})