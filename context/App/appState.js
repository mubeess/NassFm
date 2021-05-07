import React,{Children, useReducer,useEffect} from 'react'
import AppContext from './appContext'
import appReducer from './appReducer'
import {
SET_MESSAGE,
UNSET_MESSAGE,
SET_USER,
SET_CAR,
SET_LOG
} from '../types'


export default function AppState(props){
    const initState={
        user:{
            name:'',
            id:'',
            email:'',
            cars:[]
        },
        message:'',
        cars:[],
        isLogged:false,
        snackVisible:false
     
        
    }
const [state,dispatch]=useReducer(appReducer,initState)

const setMessage=(message)=>dispatch({type:SET_MESSAGE,payload:message})
const setUser=(user)=>dispatch({type:SET_USER,payload:user})
const unsetMessage=()=>dispatch({type:UNSET_MESSAGE})
const setCar=(car)=>dispatch({type:SET_CAR,payload:car})
const setLog=()=>dispatch({type:SET_LOG})

return <AppContext.Provider
value={{
    user:state.user,
    snackVisible:state.snackVisible,
    message:state.message,
    cars:state.cars,
    isLogged:state.isLogged,
    setMessage,
    unsetMessage,
    setUser,
    setCar,
    setLog
   

}}
>

    {props.children}
</AppContext.Provider>

}