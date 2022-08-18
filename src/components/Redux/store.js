import { configureStore } from "@reduxjs/toolkit";
import { persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist'
import {persistSliceContacts} from './sliceContacts';

export const store=configureStore({
    reducer:  {
            contacts:persistSliceContacts,   
        },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    },
)

export const persistor = persistStore(store)