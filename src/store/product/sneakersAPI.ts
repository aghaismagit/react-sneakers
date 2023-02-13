import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { type ISneakers } from "./interface"

export const sneakersAPI = createApi({
  reducerPath: "sneakersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63e5d66f83c0e85a8687b45b.mockapi.io"
  }),
  endpoints: (build) => ({
    fetchAllsneakers: build.query<ISneakers[], void>({
      query: () => ({
        url: "/sneakers"
      })
    }),
    fetchSneakersPage: build.query<ISneakers, string>({
      query: (id) => ({
        url: "/sneakers/" + id
      })
    })
  })
})
