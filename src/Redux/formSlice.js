import { createSlice } from "@reduxjs/toolkit";
const initialState ={
forms:[],
name:null,
}

export const formSlice =  createSlice({
    name:"forms",
    initialState,
    reducers:{
        setForms:(state,action)=>{
            state.forms=action.payload
        },
        setName:(state,action)=>{
            state.name=action.payload
        }

    }
})

export const {setForms,setName} = formSlice.actions
export default formSlice.reducer;