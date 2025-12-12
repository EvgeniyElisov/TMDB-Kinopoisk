import type { Movie } from "@/features/api/moviesApi.types";
import { useNavigate } from "react-router";
import styles from "./MoviesList.module.css";
import { MovieCard } from "../MovieCard/MovieCard";
import type { PagePathsType } from "@/common/constants";

type Props = {
  movies: Movie[];
  title: string;
  itemsNumber?: number;
  categoryPath?: PagePathsType;
};

export const MoviesList = ({ movies, title, itemsNumber, categoryPath }: Props) => {
  const navigate = useNavigate();
  
  const displayedMovies = itemsNumber ? movies.slice(0, itemsNumber) : movies;
  const hasMoreMovies = itemsNumber && movies.length > itemsNumber;

  const handleViewMore = () => {
    if (categoryPath) {
      navigate(categoryPath);
    }
  };

  return (
    <section aria-labelledby={`movies-section-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <div className={styles.headerContainer}>
        <h2 id={`movies-section-${title.replace(/\s+/g, "-").toLowerCase()}`}>{title}</h2>
        {hasMoreMovies && categoryPath && (
          <button 
            className={styles.viewMoreButton} 
            type="button" 
            aria-label={`View more ${title}`}
            onClick={handleViewMore}
          >
            View more
          </button>
        )}
      </div>
      <ul 
        className={styles.moviesList} 
        role="list"
        style={{ gridTemplateColumns: itemsNumber && `repeat(${itemsNumber}, 1fr)`}}
      >
        {displayedMovies?.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
};
