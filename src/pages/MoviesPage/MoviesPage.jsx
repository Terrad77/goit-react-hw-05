import css from './MoviesPage.module.css';
import { useEffect, useMemo, useState } from 'react';
import { searchMovies } from '../../movies-api';

// import { Field, Form, Formik } from 'formik';
// import * as Yup from 'yup';
//npm install react-hot-toast
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MoveList';

// схема валідації input
// const SearchFormSchema = Yup.object().shape({
//   query: Yup.string().min(1, 'Nothing to search!').required('Required'),
// });

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  // const [] = useMemo();

  const [params, setParams] = useSearchParams();
  const movieFilter = params.get('query') ?? '';

  // ф-ція зміни параметрів запиту
  const changeMovieFilter = newFilter => {
    params.set('query', newFilter);
    setParams(params);
    setQuery(newFilter);
  };

  // useEffect(() => {
  //   if (movieFilter.trim() !== '') {
  //     // Only perform a search if there is a non-empty query
  //     handleSearch();
  //   }
  // }, [movieFilter]);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       setIsLoading(true);
  //       const data = await searchMovies();
  //       setMovies(data.results);
  //       // console.log(data);
  //     } catch (error) {
  //       setError(true);
  //       console.error(error);
  //       toast.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getData();
  // }, []);

  // const handleSearch = async (values, actions) => {
  //   if (values.query.trim() === '') {
  //     toast.dismiss();
  //     toast.error('Please enter text to search movies!');
  //     return;
  //   }
  //   getData(values.query);
  //   actions.resetForm();
  // };
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
  // console.log(movies);
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <div className={css.search}>
        <Toaster />
        <input
          type="text"
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
