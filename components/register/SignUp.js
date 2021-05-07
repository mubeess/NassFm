import React,{useState,useContext,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from 'react-native-vector-icons/AntDesign'
import NetInfo from "@react-native-community/netinfo";
import AppContext from '../../context/App/appContext'
import { View, Text,StyleSheet,StatusBar,TouchableOpacity,Dimensions,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph,Headline,TextInput,Snackbar,ActivityIndicator} from 'react-native-paper';
const windowHeight = Dimensions.get('window').height;
export default function Personal({navigation}) {
  const [name,setName]=useState('')
  const [pass,setPass]=useState('')
  const [mail,setMail]=useState('')
  const [isAvaaa,setAv]=useState(false)
  const [isLoading,setLoading]=useState(false)
  const appProps=useContext(AppContext)
  useEffect(()=>{
    NetInfo.fetch().then(networkState => {
    if (!networkState.isConnected) {
      appProps.setMessage('Please connect your phone to the internet!!!')
    }
    });
    getData()
  },[])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
      const strinVal=JSON.parse(value)
      const oneOfUserCars=strinVal.cars.legnth?strinVal.cars:[{driver:'Sample',plate:'Sample',longitude:3.406448,latitude:6.465422}]
      appProps.setUser(strinVal)
      appProps.setCar(oneOfUserCars)
      navigation.navigate('Main')
      
      }else{
        return setAv(true)
      }
    } catch(e) {
      console.log(e)
    }
    
  }
    return (
      <>
 
  {
    !isAvaaa&&(
      <View style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'white'
              }}>
                <ActivityIndicator animating={true} color='blue'></ActivityIndicator>
              </View>
    )
  }
  {
    isAvaaa&&(
      <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss()
      }} style={styles.cont}>
      <View style={[styles.cont,{padding:20}]}>
        <StatusBar  backgroundColor="white" hidden={false}></StatusBar>
        <Title style={styles.par}>Sign up</Title>
        <Paragraph style={styles.sub}>Use your credentials to sign up into Mubs_tracker.!</Paragraph>
        
        <TextInput
          label="Full Name"
          placeholder='First Last'
          value={name}
          selectionColor='black'
          underlineColor='black'
          style={styles.btn2}
          theme={{colors: {primary: 'black'}}}
          onChangeText={(text)=>{setName(text)}}
          mode='outlined'
        />
        
        <TextInput
          label="Email Address"
          placeholder='sample@mail.com'
          value={mail}
          selectionColor='black'
          underlineColor='black'
          style={styles.btn3}
          theme={{colors: {primary: 'black'}}}
          onChangeText={(text)=>{setMail(text)}}
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
        const newUser={
          name,
          email:mail,
          password:pass
        }
        NetInfo.fetch().then(networkState => {
          if (!networkState.isConnected) {
           return appProps.setMessage('connect your phone to the internet !!!')
          }
          if (networkState.isConnected) {
            setLoading(true)
            if (mail==''||pass==''||name=='') {
             return alert(`fields can't be empty`),setLoading(false)
            }
            fetch('https://trackerrapp.herokuapp.com/register',{
              method:'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(newUser)
            }).then(res=>{
            res.json().then(user=>{
              appProps.setMessage(`${user.name} added succesfully`)
              setLoading(false)
              setMail('')
              setName('')
              setPass('')
              setTimeout(() => {
                appProps.unsetMessage()
              }, 2000);
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
        Register
      </Button>
      </View>
      </TouchableWithoutFeedback>
    )
  }
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
    marginTop:30,
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
    height: 40
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
   borderRadius: 10,
   marginBottom: 'auto'
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
    height: 40
  },
  messageView:{
    marginTop:'auto',
    flexDirection:'row',
    justifyContent: 'center',
  }
})