import {createSlice} from "@reduxjs/toolkit";

const initialState={filter:''};

export const sliceContacts=createSlice({
    name:"contacts",
    initialState,
    reducers:{
        setFilter(state,action){
            return {...state,filter:action.payload}
        }
    }
})

export const{setFilter}=sliceContacts.actions

export const contactsReducer= sliceContacts.reducer

//Selectors
export const getFilter=state=>state.contacts.filter;