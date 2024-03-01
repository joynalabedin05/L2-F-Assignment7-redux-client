import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://l2-b2-frontend-path-assignment-7-server-starter-pack.vercel.app/api/v1",
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
        // user related api
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

        }),

        // donation related api

        userDonation: builder.mutation({
          query: (data)=>{
            console.log('inside base api',data);
            return {
            url: '/donate-amount',
            method: 'POST',
            body: data,
        }
        }, 
        invalidatesTags: ['user'],
        }),
        getAllDonation: builder.query({
            query: ()=>({
               url: '/all-donation',
               method: 'GET',             
            }),
            providesTags: ['user'] ,
        }),

        createVolunteer: builder.mutation({
            query: (data)=>{
            console.log('inside base api',data);
            return {
            url: '/create-volunteer',
            method: 'POST',
            body: data,
        }
        }, 
        invalidatesTags: ['user'],
        }),

        getAllVolunteer: builder.query({
            query: ()=>({
               url: '/volunteers',
               method: 'GET',             
            }),
            providesTags: ['user'] ,
        }),

        // testimoniaos related api

        createTestimonial: builder.mutation({
            query: (data)=>{
            console.log('inside base api',data);
            return {
            url: '/create-testimonial',
            method: 'POST',
            body: data,
        }
        }, 
        invalidatesTags: ['user'],
        }),

        getAllTestimonial: builder.query({
            query: ()=>({
               url: '/testimonials',
               method: 'GET',             
            }),
            providesTags: ['user'] ,
        }),
        // community related api

        createCommunityPost: builder.mutation({
            query: (data)=>{
            console.log('inside base api',data);
            return {
            url: '/create-community-post',
            method: 'POST',
            body: data,
        }
        }, 
        invalidatesTags: ['user'],
        }),

        getAllCommunityPost: builder.query({
            query: ()=>({
               url: '/community-posts',
               method: 'GET',             
            }),
            providesTags: ['user'] ,
        }),

        getAllSupply: builder.query({
            query: ()=>({
               url: '/all-supply',
               method: 'GET',             
            }),
            providesTags: ['user'] ,
        }),
        updateAllSupply: builder.mutation({
            query: (data)=>{
                console.log('inside base api',data);
                return {
                url: '/create-community-post',
                method: 'POST',
                body: data,
            }
            }, 
            invalidatesTags: ['user'] ,
        }),
        
    }),
  })

  export const {useRegisterUserMutation,
    useLoginUserMutation, 
    useGetAlluserQuery, 
    useGetAllSupplyQuery, 
    useUserDonationMutation,
    useGetAllDonationQuery,
    useCreateVolunteerMutation,
    useGetAllVolunteerQuery,
    useCreateTestimonialMutation,
    useGetAllTestimonialQuery,
    useCreateCommunityPostMutation,
    useGetAllCommunityPostQuery,
    } = baseApi;