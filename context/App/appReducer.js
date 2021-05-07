import {
  SET_MESSAGE,
  UNSET_MESSAGE,
  SET_USER,
  SET_CAR,
  SET_LOG
     } from '../types'
 
 export default (state,action)=>{
 switch(action.type){
 case SET_MESSAGE:
     let msg=action.payload
     return{
         ...state,
         message:msg,
         snackVisible:true
     }
 case UNSET_MESSAGE:
         return{
         ...state,
         snackVisible:false,
         message:''
 
     }
 case SET_USER:
     let user=action.payload
     return{
         ...state,
         user:user
     }

case SET_CAR:
        let car=action.payload
        return{
            ...state,
            cars:car
        }
case SET_LOG:
    const curr=state.isLogged
        return{
            ...state,
            isLogged:!curr
        }
 
     default:
     return state;
 }
 
 }