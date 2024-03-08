import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MoveList';
import css from './HomePage.module.css';
import { getMovies } from '../../movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div className={css.homePageContainer}>
      <h1>Trending today</h1>
      {isLoading && <b>Loading movies...</b>}
      {error && <b>HTTP error!!!</b>}
      <MovieList movies={movies} />
    </div>
  );
}
