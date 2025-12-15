import type { RootState } from '@/app/model/store.ts'
import { moviesApi } from '@/features/api/moviesApi'
import { useSelector } from 'react-redux'

const excludedEndpoints = [
  moviesApi.endpoints.getPopularMovies.name,
  moviesApi.endpoints.getTopRatedMovies.name,
  moviesApi.endpoints.getUpcomingMovies.name,
  moviesApi.endpoints.getNowPlayingMovies.name,
  moviesApi.endpoints.getMoviesByFilter.name,
  moviesApi.endpoints.getMoviesBySearch.name,

]

const getQueries = (state: RootState) => {
  const regularQueries = Object.values(state.baseApi.queries || {})
  const infiniteQueries = Object.values((state.baseApi as any).infiniteQueries || {})
  return [...regularQueries, ...infiniteQueries] as Array<{ status?: string; endpointName?: string }>
}


 
export const useGlobalLoading = () => {
  return useSelector((state: RootState) => {
    const queries = getQueries(state);

    console.log(queries);

    const hasActiveQueries = queries.some(query => {
      if (query?.status !== 'pending') return false
      if (!query?.endpointName) return true
      
      if (excludedEndpoints.includes(query.endpointName) && queries.find(q => q?.endpointName === query.endpointName)?.status === 'fulfilled') {
        const completedQueries = queries.filter(q => q?.status === 'fulfilled')
        return completedQueries.length > 0
      }
      return true
    })
    return hasActiveQueries
  })
}

