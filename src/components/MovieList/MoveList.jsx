import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>{movie}</li>
      ))}
    </ul>
  );
}
