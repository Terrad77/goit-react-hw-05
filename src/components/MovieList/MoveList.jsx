import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li className={css.moviesItem} key={movie.id}>
          <a href="">{movie.title}</a>
          <Link to={`/movies/${movie.id}`}> - go for Details</Link>
        </li>
      ))}
    </ul>
  );
}
