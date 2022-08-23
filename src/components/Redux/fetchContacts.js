import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6303ea61761a3bce77e0fc18.mockapi.io/api/v1/' }),
    tagTypes:['contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
        query: () => `/contacts`,
        providesTags:['Contact']
        }),
        addContacts: builder.mutation({
            query:  (data)=>({ 
                url:`/contacts`,
                method:'POST',
                body:data
            }),
            invalidatesTags:['Contact'],
        }),
        deleteContact: builder.mutation({
            query:(idContact)=>({
                url:`/contacts/${idContact}`,
                method:'DELETE'
            }),
            invalidatesTags:['Contact'],
        }),
    }),
})

export const { useGetContactsQuery, useAddContactsMutation,useDeleteContactMutation } = contactsApi