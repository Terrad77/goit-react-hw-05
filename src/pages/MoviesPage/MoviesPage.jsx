import css from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../movies-api';
//npm install react-hot-toast
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MoveList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');

  const [params, setParams] = useSearchParams();
  const movieFilter = params.get('query') ?? '';

  useEffect(() => {
    const render = async () => setMovies(await searchMovies(movieFilter));
    render();
  }, []);

  // ф-ція зміни параметрів запиту
  const changeMovieFilter = newFilter => {
    params.set('query', newFilter);
    setParams(params);
    setQuery(newFilter);
  };

  const handleSearch = async () => {
    if (query === '') {
      toast.dismiss();
      toast.error('Please enter text to search movies!');
      return;
    }
    try {
      setIsLoading(true);
      const data = await searchMovies(movieFilter);
      setMovies(data.results);
    } catch (error) {
      setError(true);
      console.error(error);
      toast.error('Error fetching movies');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <div className={css.search}>
        <Toaster />
        <input
          type="text"
          name="find_movie"
          value={movieFilter}
          onChange={e => changeMovieFilter(e.target.value)}
        />
        <button className={css.btnSearch} onClick={handleSearch}>
          Search
        </button>
      </div>
      {isLoading && <b>Loading search movies...</b>}
      {error && <b>HTTP error!</b>}
      <MovieList movies={filteredMovies} />
    </div>
  );
}
