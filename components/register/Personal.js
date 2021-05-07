import React,{useState,useEffect,useContext} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AppContext from '../../context/App/appContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
import { View, Text,StyleSheet,StatusBar,TouchableOpacity,Dimensions,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph,Headline,TextInput,Snackbar} from 'react-native-paper';
const windowHeight = Dimensions.get('window').height;
export default function Personal({navigation}) {
  const [name,setName]=useState('')
  const [pass,setPass]=useState('')
  const [isLoading,setLoading]=useState(false)
  const appProps=useContext(AppContext)
  useEffect(()=>{
    NetInfo.fetch().then(networkState => {
    if (!networkState.isConnected) {
      appProps.setMessage('Please connect your phone to the internet!!!')
    }
    });
  },[])
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      console.log('data seted')
    } catch (e) {
      console.log('errrorrr')
    }
  }
    return (
    <>
  <TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss()
  }} style={styles.cont}>
  <View style={styles.cont}>
    <StatusBar  backgroundColor="white" hidden={false}></StatusBar>
    <TouchableOpacity style={styles.btn}><AntDesign name='arrowleft' size={25}></AntDesign></TouchableOpacity>
    <Title style={styles.par}>Let's sign you in.</Title>
    <Paragraph style={styles.sub}>Use your credentials to sign in to your account!</Paragraph>
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
    <Paragraph style={styles.msgPar}>Don't have an account?</Paragraph>
    <Button onPress={()=>{
      navigation.navigate('Register')
    }} color='black' uppercase={false} compact dark type='text'>Register</Button>
   
    </View>
     <Button uppercase={false} style={styles.proceed}  
    color='black' 
    loading={isLoading}
    icon="arrow-right-circle"
    mode="contained" 
    onPress={() =>{
      const user={
        email:name,
        password:pass
      }
     let myCars=[]
      NetInfo.fetch().then(networkState => {
        if (!networkState.isConnected) {
         return appProps.setMessage('connect your phone to the internet !!!')
        }
        if (networkState.isConnected) {
          setLoading(true)
          if (pass==''||name=='') {
           return alert(`fields can't be empty`),setLoading(false)
          }
          fetch(`https://trackerrapp.herokuapp.com/user/${name}`).then(res=>{
          res.json().then(user=>{
            // appProps.setMessage(`${user.name} added succesfully`)
            if (user.password==pass) {
              const oneOfUserCars=user.cars.legnth?user.cars:[{driver:'Sample',plate:'Sample',longitude:3.406448,latitude:6.465422}]
              setLoading(false)
              storeData(user)
              appProps.setUser(user)
              appProps.setCar(oneOfUserCars)

            setName('')
            setPass('')
              navigation.navigate('Main')
            }else{
            setLoading(false)
           appProps.setMessage('invalid user!!!!')
           setTimeout(() => {
            appProps.unsetMessage()
           }, 3000);
            }
            
          }).catch(err=>{
            setLoading(false)
            alert('Please make sure your email is not registered!!!')
          })
          })
          .catch(err=>{
            alert('Please make sure your email is not registered!!!')
          })
        
         }
        })
 

    }}>
    Sign In
  </Button>
  </View>
  </TouchableWithoutFeedback>
  <Snackbar
        visible={appProps.snackVisible}
        onDismiss={()=>{
          console.log('dis')
        }}
        action={{
          label: 'close',
          onPress: () => {
            appProps.unsetMessage()
          },
        }}>
        {appProps.message}
      </Snackbar>
  </>
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