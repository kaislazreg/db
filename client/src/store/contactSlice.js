import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'


const contactSlice = createSlice({
  name: 'contact',
  initialState:[{
    id : uuidv4() ,
    name :'kais' ,
    age : 29 ,
    email : 'kais@gmail.com'
  }],


  reducers: {
    //sna3na  reducer ta3 add mta3na 
    addcontact:(state,action)=>{
        const newcontact={
            id:uuidv4(),
            ...action.payload
        }
        return [...state,newcontact]
    }, 


    //tw sna3na reducer ta3 update
    updatingcontact : (state,action)=>{
        return action.payload
    },

  }
});

export const {addcontact,updatingcontact} = contactSlice.actions

export default contactSlice.reducer