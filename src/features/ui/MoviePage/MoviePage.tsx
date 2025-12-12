import { useGetMovieDetailsQuery } from "@/features/api/moviesApi";
import { useParams } from "react-router";

export const MoviePage = () => {
  const { id } = useParams();
  const { data: movie } = useGetMovieDetailsQuery({ movie_id: Number(id) });
  return <div>MoviePage</div>;
};
