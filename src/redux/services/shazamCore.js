import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '49b2e57043msh4e89a3a78ad023cp1bc7e1jsn106cedb5aea2');

        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world' }),
      getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
      getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}`}),
      getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
      getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
      getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`}),
      getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
    })
  })

  export const {
    useGetTopChartsQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
  } = shazamCoreApi;