import React,{useState,useEffect,useRef,useContext} from 'react'
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppContext from '../../context/App/appContext'
import { View, Text,StyleSheet,StatusBar,Dimensions,Image,ScrollView,Animated} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Headline, Paragraph, Subheading, Title,FAB,Dialog, Portal,TextInput,Snackbar} from 'react-native-paper'
import Bottom from './Bottom'
import MapView,{Marker} from 'react-native-maps';
export default function MainHome({navigation}) {
    const [anmatedValue,setAnim]=useState(new Animated.Value(0.2))
    const mobileHeight=Dimensions.get('window').height;
    const [mapRef,setMapref] = useState(null);
    const [visible, setVisible] = useState(false);
    const [loading,setLoading]=useState(false)
    const [logVis,setLogVis]=useState(true)
    const showDialog = () => setVisible(true);
    const appProps=useContext(AppContext)
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
        return null
        }else{
          navigation.navigate('Login')
        }
      } catch(e) {
        console.log('errrr')
      }
    }
    



   function addDriver() {
     console.log(driver,plate)
     const newCar={
       driver,
       plate,
       email:appProps.user.email,
       longitude:'',
       latitude:''

     }
     NetInfo.fetch().then(networkState => {
      if (!networkState.isConnected) {
       return appProps.setMessage('connect your phone to the internet !!!')
      }
      if (networkState.isConnected) {
        setLoading(true)
        if (driver==''||plate=='') {
         return alert(`fields can't be empty`),setLoading(false),console.log(appProps.user)
        }
        fetch('https://trackerrapp.herokuapp.com/update/cars',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(newCar)
        }).then(res=>{
        res.json().then(car=>{
          appProps.setCar(car)
          appProps.setMessage(`car  added succesfully`)
          setLoading(false)
          setDriver('')
          setPlate('')
          setVisible(false)
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
    //  setVisible(false)
   }
    const [driver,setDriver]=useState('')
    const [plate,setPlate]=useState('')
    useEffect(()=>{
        Animated.loop(
            Animated.sequence([
              Animated.timing(anmatedValue, {
                toValue: 1,
                duration: 300,
                delay: 0,
                useNativeDriver:true
              }),
              Animated.timing(anmatedValue, {
                toValue: 0.2,
                duration: 300,
                useNativeDriver:true,
              })
            ]),
          ).start()
          // const newCar=appProps.user.cars;
          // appProps.setCar(newCar)
         setTimeout(() => {
           updateLocation()
         }, 1000);
         getData()
         

    },[])
   
    function updateLocation() {
      if (appProps.cars.length==0) {
        return null
      }

      if (appProps.cars.length>0) {
        setInterval(() => {
          NetInfo.fetch().then(networkState => {
            if (!networkState.isConnected) {
             return appProps.setMessage('connect your phone to the internet for updating cars location !!!')
            }
            if (networkState.isConnected) {
              fetch(`https://trackerrapp.herokuapp.com/location/${appProps.user.email}`).then(res=>{
              res.json().then(car=>{
              if (car.length) {
                appProps.setCar(car)
              }
             
              }).catch(err=>{
                appProps.setMessage('Something went wrong while updating cars location')
              })
              })
              .catch(err=>{
                appProps.setMessage('Unable to update your cars location. check your internet connection')
              })
            
             }
            })
        }, 60000);
      }
     
    }

   function animRef(latitude,longitude) {
   mapRef.animateCamera({center: {latitude,longitude},pitch: 2, heading: 20,altitude: 200, zoom: 14},2000)
   }
       return ( 
        <>
        <ScrollView style={styles.cont}>
        <StatusBar  backgroundColor="#E0E0E0" hidden={false}></StatusBar>
        <MapView
        ref={ref => { setMapref(ref)  }}
        style={{
            flex:1,
            height:mobileHeight-80,
            width:'100%',
            backgroundColor:'white',
        }}
       initialRegion={{
       latitude: 9.072264,
       longitude: 7.491302,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
    }}
    
  >
    
      {/* <Marker title='Adamawa state' 
      description='landing'  
      coordinate={{ latitude: 9.333333, longitude: 12.500000 }} >
      <Animated.View style={{
          width: 50,
          height: 50,
          backgroundColor:'rgba(44, 130, 201,0.4)',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          opacity: anmatedValue,
          transform:[
            {scale:anmatedValue.interpolate({
                inputRange:[0.2, 1],
                outputRange:[0.7,1],
            })}
        ],
      }}>
         <View style={{
             width: 20,
             height: 20,
             backgroundColor:'rgba(44, 130, 201,1)' ,
             borderRadius:50
         }}></View>
      </Animated.View>

      </Marker> */}
      {
        appProps.cars.length&&(
         appProps.cars.map((car,ind)=>(
          <Marker key={ind} title={`Driver Name: ${car.driver||'1st car'}`} 
          description={`Plate Number: ${car.plate||'1st car plate number'}`}  
          coordinate={{ latitude: car.latitude||9.072264+ind, longitude:car.longitude||7.491302+ind }} >
          <Animated.View style={{
              width: 50,
              height: 50,
              backgroundColor:'rgba(44, 130, 201,0.4)',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: anmatedValue,
              transform:[
                {scale:anmatedValue.interpolate({
                    inputRange:[0.2, 1],
                    outputRange:[0.7,1],
                })}
            ],
          }}>
             <View style={{
                 width: 20,
                 height: 20,
                 backgroundColor:'rgba(44, 130, 201,1)' ,
                 borderRadius:50
             }}></View>
          </Animated.View>
    
          </Marker>
         ))
        )
      }
      
  </MapView>
        </ScrollView>
    <FAB
    style={styles.fab}
    small={false}
    icon="plus"
    onPress={() =>{
     showDialog()
    }}
  />
   <FAB
    style={styles.fab2}
    small
    icon="menu"
    onPress={() => {
        navigation.openDrawer()
    }}
  />
  <Bottom animRef={animRef}></Bottom>


  <Portal>
        <Dialog visible={visible} onDismiss={()=>{
          setVisible(false)
        }}>
          <Dialog.Title>Add Car</Dialog.Title>
          <Dialog.Content>
      <TextInput
      label="Driver's Name"
      placeholder='First Last'
      selectionColor='black'
      underlineColor='black'
      theme={{colors: {primary: 'black'}}}
      onChangeText={(text)=>{setDriver(text)}}
      mode='outlined'
      Value={driver}
    />
      <TextInput
      label="Plate Number"
      placeholder='GME78*****'
      selectionColor='black'
      underlineColor='black'
      theme={{colors: {primary: 'black'}}}
      onChangeText={(text)=>{setPlate(text)}}
      mode='outlined'
      Value={plate}
    />
          </Dialog.Content>
          <Dialog.Actions>
            <Button loading={loading} icon="car-2-plus" onPress={addDriver}>Add</Button>
          </Dialog.Actions>
        </Dialog>
  </Portal>

  <Snackbar
        visible={appProps.snackVisible}
        onDismiss={()=>{
          appProps.unsetMessage()
        }}
        action={{
          label: 'close',
          onPress: () => {
            appProps.unsetMessage()
          },
        }}>
        {appProps.message}
      </Snackbar>
 {
   appProps.isLogged&&(
    <Portal>
    <Dialog visible={logVis} onDismiss={()=>{
      navigation.navigate('Login')
      appProps.setLog()
      setLogVis(false)
    }}>
      <Dialog.Title>Logged Out</Dialog.Title>
      <Dialog.Content>
        <Paragraph>You are logged out, kindly press OK to log in again.</Paragraph>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={()=>{
         navigation.navigate('Login')
         appProps.setLog()
         setLogVis(false)
        }}>Ok</Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
   )
 }
         </>
    )
}
const styles=StyleSheet.create({
cont:{
    backgroundColor:'white',
    flex: 1,
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
},
message:{
    height:100,
    width:'100%',
    padding:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
},
fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 50,
    backgroundColor:'rgba(44, 130, 201,0.8)'
  },
  fab2: {
    position: 'absolute',
    margin: 16,
    left: 20,
    top:0,
    backgroundColor:'white'
  },
})