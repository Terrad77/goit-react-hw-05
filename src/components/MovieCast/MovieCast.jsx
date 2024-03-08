import { Link } from 'react-router-dom';
import css from './MovieCast.module.css';

export default function MovieCast({ movie }) {
  console.log(movie);
  return (
    <div className={css.container}>
      <img href={movie.cast.profile_path}></img>
      <p>{movie.cast.name}</p>
      <p>{movie.cast.character} </p>
      {/* унікальний лінк за ідентифікатором об'єкту */}
      <Link to={`/movies/${movie.id}`}>Details</Link>
    </div>
  );
}
