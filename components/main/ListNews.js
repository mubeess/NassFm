import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Caption, Headline, Subheading, Title } from 'react-native-paper'
import SimpleIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function ListNews({playSound}) {
    return (
        <TouchableOpacity onPress={()=>{
            playSound()
        }}>
        <View style={styles.listCont}>
           <Image style={styles.logo}
          source={require('../../assets/nass.png')}></Image>
          <View>
              <Title>Shiri Safe</Title>
              <Caption>13m . 13 hours ago</Caption>
          </View>
       <TouchableOpacity style={styles.optIcon}><SimpleIcons name='options-vertical' size={20} color='black'></SimpleIcons></TouchableOpacity>
        </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    listCont:{
        height:100,
        width: '100%',
        borderBottomWidth:1,
        borderBottomColor:'#f9f9f9',
        flexDirection: 'row',
        padding: 20
    },
    logo:{
        width:50,
        height: 50
    },
    optIcon:{
   marginTop: 10,
   marginLeft:100,
    }
})