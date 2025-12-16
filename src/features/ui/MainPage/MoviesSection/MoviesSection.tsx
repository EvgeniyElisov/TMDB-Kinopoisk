import { nanoid } from "nanoid";
import { MoviesList } from "@/common/components";
import { PagePathsType, type CategoryMoviesTitlesType } from "@/common/types";
import type { Movie } from "@/features/api/moviesApi.types";

type Props = {
  moviesListData: {
    title: CategoryMoviesTitlesType;
    movies: Movie[];
    categoryPath: PagePathsType;
  }[];
};

export const MoviesSection = ({ moviesListData }: Props) => {
  return (
    <section>
      {moviesListData.map((movieData) => (
        <MoviesList 
          key={nanoid()} 
          title={movieData.title} 
          movies={movieData.movies} 
          itemsNumber={6} 
          categoryPath={movieData.categoryPath} 
          columns={6} 
        />
      ))}
    </section>
  );
};
