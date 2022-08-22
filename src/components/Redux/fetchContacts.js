import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6303ea61761a3bce77e0fc18.mockapi.io/api/v1/' }),
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => `/contacts`,
      }),
    }),
  })
  
  export const { useGetContacts } = contactsApi