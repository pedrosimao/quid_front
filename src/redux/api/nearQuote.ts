// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface NearQuoteType {
  near: { usd: number; eur: number; cny: number; last_updated_at: number }
}
// Define a service using a base URL and expected endpoints
export const nearQuoteApi = createApi({
  reducerPath: 'nearQuote',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://near-contract-helper.onrender.com',
  }),
  endpoints: (builder) => ({
    // returns USD quote for Near
    getNearQuote: builder.query<number, void>({
      query: () => `fiat`,
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: NearQuoteType) => response?.near?.usd,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetNearQuoteQuery } = nearQuoteApi
