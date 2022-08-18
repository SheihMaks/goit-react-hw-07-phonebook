import {createSlice} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const initialState={items:[], filter:''};

const sliceContacts=createSlice({
    name:"contacts",
    initialState,
    reducers:{
        setContacts(state,action){return {...state,items:[...state.items,action.payload]}
        },
        deleteContact(state,action){
            return  {...state,items:state.items.filter(object=>object.name !== action.payload)}
        },
        setFilter(state,action){
            return {...state,filter:action.payload}
        }
    }
})

export const{setContacts,deleteContact,setFilter}=sliceContacts.actions

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist:['filter']
};

export const persistSliceContacts=persistReducer(persistConfig,sliceContacts.reducer)

//Selectors
export const getContacts=state=>state.contacts.items;
export const getFilter=state=>state.contacts.filter;