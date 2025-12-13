import type { Movie } from "@/features/api/moviesApi.types";
import { NavLink } from "react-router";
import styles from "./MoviesList.module.css";
import { MovieCard } from "../MovieCard/MovieCard";
import type { PagePathsType } from "@/common/types";

type Props = {
  movies: Movie[];
  title: string;
  itemsNumber?: number;
  categoryPath?: PagePathsType;
  columns: number;
};

export const MoviesList = ({ movies, title, itemsNumber, categoryPath, columns }: Props) => {
  const displayedMovies = itemsNumber ? movies.slice(0, itemsNumber) : movies;
  const hasMoreMovies = itemsNumber && movies.length > itemsNumber;

  return (
    <section aria-labelledby={`movies-section-${title?.replace(/\s+/g, "-").toLowerCase()}`}>
      <div className={styles.headerContainer}>
        <h2 id={`movies-section-${title.replace(/\s+/g, "-").toLowerCase()}`}>{title}</h2>
        {hasMoreMovies && categoryPath && (
          <NavLink 
            to={categoryPath}
            className={styles.viewMoreButton} 
            aria-label={`View more ${title}`}>
            View more
          </NavLink>
        )}
      </div>
      <ul 
        role="list"
        className={styles.moviesList}
        style={{ '--columns': columns } as React.CSSProperties}
      >
        {displayedMovies?.map((movie) => (
          <li key={movie.id}>
            <MovieCard id={movie.id} title={movie.title} posterPath={movie.poster_path} rating={+movie.vote_average.toFixed(1)} />
          </li>
        ))}
      </ul>
    </section>
  );
};
