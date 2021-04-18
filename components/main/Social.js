import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import Antd from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
export default function Social() {
    return (
        <View style={{
            height:100,
            width:'100%',
            padding: 20,
            flexDirection:'row',
            justifyContent: 'space-around',
        }}>
            <TouchableHighlight onPress={()=>{
                console.log('meee')
            }}>
            <Antd name='facebook-square' size={25} color='black'></Antd>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>{
                console.log('meee')
            }}>
            <Antd name='twitter' size={25} color='black'></Antd>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=>{
                console.log('meee')
            }}>
            <Antd name='youtube' size={25} color='black'></Antd>
            </TouchableHighlight>

            

            <TouchableHighlight onPress={()=>{
                console.log('meee')
            }}>
            <Foundation name='web' size={25} color='black'></Foundation>
            </TouchableHighlight>
            
        </View>
    )
}
