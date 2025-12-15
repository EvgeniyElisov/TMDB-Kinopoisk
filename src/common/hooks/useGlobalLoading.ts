import type { RootState } from '@/app/model/store.ts'
import { moviesApi } from '@/features/api/moviesApi'
import { useSelector } from 'react-redux'

const excludedEndpoints = [
  moviesApi.endpoints.getPopularMovies.name,
  moviesApi.endpoints.getTopRatedMovies.name,
  moviesApi.endpoints.getUpcomingMovies.name,
  moviesApi.endpoints.getNowPlayingMovies.name,
  moviesApi.endpoints.getMoviesByFilter.name,
]
 
export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    const queries = Object.values(state.baseApi.queries || {})

    const hasActiveQueries = queries.some(query => {
      if (query?.status !== 'pending') return
      
      if (excludedEndpoints.includes(query.endpointName)) {
        const completedQueries = queries.filter(q => q?.status === 'fulfilled')
        return completedQueries.length > 0
      }
    })
    return hasActiveQueries
  })
}