
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imageApi = createApi({
    reducerPath: 'image',
    baseQuery: fetchBaseQuery({

        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getImages: builder.query({
            query: () => '/photos',
        })
    })

})


export const { useGetImagesQuery } = imageApi;