import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
    prepareHeaders: (headers, {getState})=>{
        const token = (getState()).auth.token;
        if(token){
            headers.set("authorization", `${token}`);
            return headers;
        }
    },
});

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['user'],
    endpoints: (builder) => ({
       registerUser: builder.mutation({
            query: (data)=>{
                console.log('inside base api',data);
            return {
                url: '/register',
                method: 'POST',
                body: data,
            }
            }, 
            // invalidatesTags: ['user'] ,       
        }),
        userDonation: builder.mutation({
          query: (data)=>{
            console.log('inside base api',data);
            return {
            url: '/donate-amount',
            method: 'POST',
            body: data,
        }
        }, 
        }),
        loginUser: builder.mutation({
          query: (data)=>{
            console.log('inside base api',data);
            return {
            url: '/login',
            method: 'POST',
            body: data,
        }
        }, 
        }),
        getAlluser: builder.query({
            query: ()=>({
               url: '/users',
               method: 'GET',             
            }),
            // invalidatesTags: ['user'] ,       

        }),
        getAllSupply: builder.query({
            query: ()=>({
               url: '/all-supply',
               method: 'GET',             
            }),
            // invalidatesTags: ['user'] ,
        }),
    }),
  })

  export const {useRegisterUserMutation ,useLoginUserMutation, useGetAlluserQuery, useGetAllSupplyQuery, useUserDonationMutation} = baseApi;