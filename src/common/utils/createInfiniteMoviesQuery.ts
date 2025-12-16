import type { GetMoviesResponse } from "@/features/api/moviesApi.types";


export const createInfiniteMoviesQuery = <T extends GetMoviesResponse>(endpoint: string) => ({
  infiniteQueryOptions: {
    initialPageParam: 1,
    getNextPageParam: (lastPage: T) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  },
  query: ({ pageParam, queryArg }: any) => {
    const { page, ...restParams } = queryArg;
    return {
      url: endpoint,
      params: { page: pageParam, ...restParams },
    };
  },
});
  