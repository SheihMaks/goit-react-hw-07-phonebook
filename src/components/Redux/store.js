import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import {contactsReducer} from './sliceContacts';
import { contactsApi } from "./fetchContacts";

export const store=configureStore({
    reducer:  {
        [contactsApi.reducerPath]: contactsApi.reducer,
        contacts:contactsReducer,
        },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
    },
)

setupListeners(store.dispatch)
