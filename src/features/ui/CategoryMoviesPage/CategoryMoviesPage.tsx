import { MoviesList, MoviesSkeleton } from "@/common/components";
import { Paginator } from "@/common/components/Paginator";
import { CategoryMoviesPaths } from "@/common/types";
import { getCategoryMoviesData } from "@/common/utils";
import { useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } from "@/features/api/moviesApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CategoriesButtons } from "./CategoriesButtons";
import styles from "./CategoryMoviesPage.module.css";

export const CategoryMoviesPage = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const { data: popularMoviesData, isLoading: isLoadingPopular } = useGetPopularMoviesQuery({ page }, { skip: category !== CategoryMoviesPaths.Popular });
  const { data: topRatedMoviesData, isLoading: isLoadingTopRated } = useGetTopRatedMoviesQuery({ page }, { skip: category !== CategoryMoviesPaths.TopRated });
  const { data: upcomingMoviesData, isLoading: isLoadingUpcoming } = useGetUpcomingMoviesQuery({ page }, { skip: category !== CategoryMoviesPaths.Upcoming });
  const { data: nowPlayingMoviesData, isLoading: isLoadingNowPlaying } = useGetNowPlayingMoviesQuery(
    { page },
    { skip: category !== CategoryMoviesPaths.NowPlaying }
  );

  useEffect(() => {
    setPage(1);
  }, [category]);

  const { movies, title, totalPages } = getCategoryMoviesData({
    category,
    popularMoviesData,
    topRatedMoviesData,
    upcomingMoviesData,
    nowPlayingMoviesData,
  });

  const isLoading = isLoadingPopular || isLoadingTopRated || isLoadingUpcoming || isLoadingNowPlaying;

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <main aria-label="Movies by category page" className={styles.page}>
      <CategoriesButtons />
      {isLoading ? (
        <MoviesSkeleton count={20} />
      ) : (
        <>
          <MoviesList movies={movies} title={title} columns={5} />
          {totalPages > 1 && <Paginator totalPages={totalPages} page={page} handlePageChange={handlePageChange} />}
        </>
      )}
    </main>
  );
};
