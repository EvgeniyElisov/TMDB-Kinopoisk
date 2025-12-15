import { MoviesList, MoviesSkeleton } from "@/common/components";
import { PagePathsType, type CategoryMoviesTitlesType } from "@/common/types";
import type { Movie } from "@/features/api/moviesApi.types";

type Props = {
  moviesListData: {
    title: CategoryMoviesTitlesType;
    movies: Movie[];
    categoryPath: PagePathsType;
    isLoading: boolean;
  }[];
};

export const MoviesSection = ({ moviesListData }: Props) => {
  return (
    <section>
      {moviesListData.map((movieData) => (
        movieData.isLoading ? (
          <MoviesSkeleton key={movieData.title} count={6} />
        ) : (
          <MoviesList 
            key={movieData.title} 
            title={movieData.title} 
            movies={movieData.movies} 
            itemsNumber={6}
            categoryPath={movieData.categoryPath}
            columns={6}
          />
        )
      ))}
    </section>
  );
};
