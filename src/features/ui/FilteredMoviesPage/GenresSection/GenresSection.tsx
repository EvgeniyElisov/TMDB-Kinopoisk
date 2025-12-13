import { useGetGenresListQuery } from "@/features/api/moviesApi";

export const GenresSection = () => {
  const { data: genresListData } = useGetGenresListQuery({});

  return (
    <>
      <div>
        <button type="button">
          {genresListData?.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </button>
      </div>
    </>
  );
};
