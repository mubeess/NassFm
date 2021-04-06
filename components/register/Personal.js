import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text,StyleSheet,StatusBar,TouchableOpacity,Dimensions,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph,Headline,TextInput} from 'react-native-paper';
const windowHeight = Dimensions.get('window').height;
export default function Personal({navigation}) {
  const [name,setName]=useState('')
  const [isLoading,setLoading]=useState(false)

    return (
  <TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss()
  }} style={styles.cont}>
  <View style={styles.cont}>
    <StatusBar  backgroundColor="white" hidden={false}></StatusBar>
    <TouchableOpacity style={styles.btn}><AntDesign name='arrowleft' size={25}></AntDesign></TouchableOpacity>
    <Paragraph style={styles.par}>Please Enter Your Name:</Paragraph>
    <TextInput
      label="Full Name"
      placeholder='First Last'
      value={name}
      selectionColor='black'
      underlineColor='black'
      style={styles.btn2}
      theme={{colors: {primary: 'black'}}}
      onChangeText={(text)=>{setName(text)}}
    />
    <Paragraph style={styles.msgPar}>The Above Name Is Just Used To Passonalise Your Application Appearance</Paragraph>
    <Button style={styles.proceed}  
    color='black' 
    loading={isLoading}
    icon="arrow-right-circle"
    mode="contained" 
    onPress={() =>{
    console.log(name)
    setLoading(true)
    setTimeout(() => {
      navigation.navigate('Main'),
      setLoading(false)
    }, 2000);

    }}>
     Proceed To App
  </Button>
  </View>
  </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
  btn:{
    marginTop:20,
    marginLeft:30
  },
  cont:{
    display:'flex',
    flexDirection: 'column',
    backgroundColor:'white',
    height:windowHeight
  },
  par:{
    marginLeft:20,
    marginTop:20,
    textAlign:'center',
    fontSize: 20
  },
  btn2:{
    backgroundColor:'white',
    width:'80%',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: 20
  },
  msgPar:{
    textAlign: 'justify',
    marginLeft:20,
    marginRight:20,
    marginTop:(50/100)*windowHeight,
    color:'gray'
  },
  proceed:{
   width:'80%',
   marginLeft:'auto',
   marginRight: 'auto',
   marginTop: 20
  }
})