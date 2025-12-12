import { MoviesList } from "@/common/components";
import { CategoryMoviesPaths, CategoryMoviesTitles } from "@/common/constants";
import { useGetNowPlayingMoviesQuery, useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetUpcomingMoviesQuery } from "@/features/api/moviesApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CategoriesButtons } from "./CategoriesButtons";
import styles from "./CategoryMoviesPage.module.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import type { ChangeEvent } from "react";

export const CategoryMoviesPage = () => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const { data: popularMoviesData } = useGetPopularMoviesQuery({ page }, { skip: category !== CategoryMoviesPaths.Popular });
  const { data: topRatedMoviesData } = useGetTopRatedMoviesQuery({ page }, { skip: category !== CategoryMoviesPaths.TopRated });
  const { data: upcomingMoviesData } = useGetUpcomingMoviesQuery({ page }, { skip: category !== CategoryMoviesPaths.Upcoming });
  const { data: nowPlayingMoviesData } = useGetNowPlayingMoviesQuery({ page }, { skip: category !== CategoryMoviesPaths.NowPlaying });

  useEffect(() => {
    setPage(1);
  }, [category]);

  const getMoviesData = () => {
    switch (category) {
      case CategoryMoviesPaths.Popular:
        return { movies: popularMoviesData?.results || [], title: CategoryMoviesTitles.Popular, totalPages: popularMoviesData?.total_pages || 1 };
      case CategoryMoviesPaths.TopRated:
        return { movies: topRatedMoviesData?.results || [], title: CategoryMoviesTitles.TopRated, totalPages: topRatedMoviesData?.total_pages || 1 };
      case CategoryMoviesPaths.Upcoming:
        return { movies: upcomingMoviesData?.results || [], title: CategoryMoviesTitles.Upcoming, totalPages: upcomingMoviesData?.total_pages || 1 };
      case CategoryMoviesPaths.NowPlaying:
        return { movies: nowPlayingMoviesData?.results || [], title: CategoryMoviesTitles.NowPlaying, totalPages: nowPlayingMoviesData?.total_pages || 1 };
      default:
        return { movies: [], title: "", totalPages: 0 };
    }
  };

  const { movies, title, totalPages } = getMoviesData();

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <main aria-label="Movies by category page" className={styles.page}>
      <CategoriesButtons />
      <MoviesList movies={movies} title={title} />
      <Stack spacing={2} className={styles.paginationWrapper}>
        <Pagination 
        count={totalPages} 
        page={page} 
        variant="outlined" 
        shape="rounded" 
        size={"large"} 
        onChange={handlePageChange}
        />
      </Stack>
    </main>
  );
};
