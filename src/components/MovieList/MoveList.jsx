import { Link, NavLink } from 'react-router-dom';
import css from './MovieList.module.css';
// import { addLinkClass } from '../Navigation/Navigation';

export default function MovieList({ movies }) {
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li className={css.moviesItem} key={movie.id}>
          <NavLink
            to={`/movies/${movie.id}`}
            // className={addLinkClass}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
