import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();
  // console.log('location:', location);
  // console.log(location.pathname);
  // console.log(location.search);

  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li className={css.moviesItem} key={movie.id}>
          <NavLink
            to={`/movies/${movie.id}`}
            state={{ from: `${location.pathname}${location.search}` }}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
