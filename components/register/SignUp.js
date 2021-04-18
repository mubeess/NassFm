import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text,StyleSheet,StatusBar,TouchableOpacity,Dimensions,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph,Headline,TextInput} from 'react-native-paper';
const windowHeight = Dimensions.get('window').height;
export default function Personal({navigation}) {
  const [name,setName]=useState('')
  const [pass,setPass]=useState('')
  const [isLoading,setLoading]=useState(false)

    return (
  <TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss()
  }} style={styles.cont}>
  <View style={styles.cont}>
    <StatusBar  backgroundColor="white" hidden={false}></StatusBar>
    <TouchableOpacity style={styles.btn}><AntDesign name='arrowleft' size={25}></AntDesign></TouchableOpacity>
    <Title style={styles.par}>Sign up</Title>
    <Paragraph style={styles.sub}>Use your credentials to sign up into Mubs_tracker.!</Paragraph>
    <TextInput
      label="Email Address"
      placeholder='sample@mail.com'
      value={name}
      selectionColor='black'
      underlineColor='black'
      style={styles.btn2}
      theme={{colors: {primary: 'black'}}}
      onChangeText={(text)=>{setName(text)}}
      mode='outlined'
    />

<TextInput
      label="Password"
      placeholder='*******'
      value={pass}
      selectionColor='black'
      underlineColor='black'
      style={styles.btn3}
      theme={{colors: {primary: 'black'}}}
      onChangeText={(text)=>{setPass(text)}}
      mode='outlined'
    />
    <View style={styles.messageView}>
    <Paragraph style={styles.msgPar}>Have an account?</Paragraph>
    <Button onPress={()=>{
        navigation.navigate('Login')
    }} color='black' uppercase={false} compact dark type='text'>Sign In</Button>
   
    </View>
     <Button uppercase={false} style={styles.proceed}  
    color='black' 
    loading={isLoading}
    icon="account-plus"
    mode="contained" 
    onPress={() =>{
    console.log(name)
    setLoading(true)
    setTimeout(() => {
      navigation.navigate('Main'),
      setLoading(false)
    }, 2000);

    }}>
    Register
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
    fontWeight:'bold',
    fontSize:30
   
  },
  btn2:{
    backgroundColor:'white',
    width:'80%',
    alignSelf: 'center',
    marginTop: 50,
    marginLeft:'auto',
    marginRight: 'auto',
  },
  msgPar:{
    textAlign: 'center',
    color:'gray',
    marginTop:10
  },
  proceed:{
   width:'80%',
   marginLeft:'auto',
   marginRight: 'auto',
   marginTop: 20,
   borderRadius: 10
  },
  sub:{
    textAlign:'center',
    fontSize:20,
    marginLeft: 20,
    marginRight: 20,
    marginTop:20
  },
  btn3:{
    backgroundColor:'white',
    width:'80%',
    alignSelf: 'center',
    marginTop: 20,
    marginLeft:'auto',
    marginRight: 'auto',
  },
  messageView:{
    marginTop:(20/100)*windowHeight,
    flexDirection:'row',
    justifyContent: 'center',
  }
})