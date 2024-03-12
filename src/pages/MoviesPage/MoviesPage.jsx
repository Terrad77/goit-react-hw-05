import css from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import { searchMovies } from '../../movies-api';
import toast, { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MoveList';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  // const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = searchParams.get('query') ?? ''; //отримання значень параметрів URLSearchParams.get(key), чекає 'key' = ім'я параметра, повертає його значення або null

  // ф-ція зміни параметрів запиту
  // const changeMovieFilter = e => {
  //   e.prevent.default();
  //   params.set('query', newFilter);
  //   setParams(params);
  //   setQuery(newFilter);
  // };

  //ф-ція зміни параметру запиту
  const onFormSubmit = e => {
    e.preventDefault();
    if (value === '') {
      // toast.dismiss();
      toast.error('Please enter text to search movies!');
      return alert("Can't find movies while input field is empty");
    }
    setSearchParams({ query: value });
    setValue(''); // Очистити поле вводу після сабміту
  };

  //ефект що виконується при монтуванні та при зміні значення параметру key=query
  useEffect(() => {
    //не виконувати якщо нема запиту (у query нема значення)
    if (!query) {
      return;
    }
    //коли запит є виклик ф-ції з наданням ій значення запиту
    const fetchData = async () => {
      const data = await fetchSearchMovie(query);
      return data;
    };
    fetchData()
      //   .then(data => {
      //     if (data.results.length == 0) {
      //       return alert(`Sorry don't found any by query: ${query}`);
      //     }
      //     setMovies(data.results);
      //   })
      .catch(error => alert(error));
  }, [query]);

  // ф-ція обробки input
  const changeMovieFilter = e => {
    setValue(e.target.value);
  };

  //ф-ція запиту до API
  const fetchSearchMovie = async searchQuery => {
    //   if (query === '') {
    //     toast.dismiss();
    //     toast.error('Please enter text to search movies!');
    //     return;}
    try {
      setIsLoading(true);
      const info = await searchMovies(searchQuery);

      // // Check if info and info.results are defined before setting movies
      // if (info && info.results) {
      setMovies(info.results);
      // } else {
      //   // when no results
      //   setMovies([]);
      //   console.log(`No results found for query: ${query}`);
      // }
      //
    } catch (error) {
      setError(true);
      console.error(error);
      toast.error('Error fetching movies');
    } finally {
      setIsLoading(false);
    }
  };

  //ф-ція філтрації масиву movies за значенням запиту
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={css.container}>
      <SearchForm />
      {/* <form className={css.form} onSubmit={onFormSubmit}>
        <Toaster />
        <input
          type="text"
          name="find_movie"
          // value={movieFilter}
          value={value}
          onChange={changeMovieFilter}
        />
        <button className={css.btnSearch}>Search</button>
      </form> */}
      {isLoading && <b>Loading search movies...</b>}
      {error && <b>HTTP error!</b>}
      <MovieList movies={filteredMovies} />
    </div>
  );
}
