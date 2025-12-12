import { MoviesList } from "@/common/components";
import type { Movie } from "@/features/api/moviesApi.types";

type Props = {
  moviesListData: {
    title: string;
    movies: Movie[];
  }[];
};

export const MoviesSection = ({ moviesListData }: Props) => {
  return (
    <section>
      {moviesListData.map((movieData) => (
        <MoviesList key={movieData.title} title={movieData.title} movies={movieData.movies} />
      ))}
    </section>
  );
};
