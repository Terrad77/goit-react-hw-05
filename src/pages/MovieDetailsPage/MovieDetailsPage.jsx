import { Outlet, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../movies-api';

export default function MovieDetailsPage() {
  //отримання значення параметрів від url
  //   const params = useParams();
  //   console.log(params);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div className={css.container}>
      <button className={css.btn} type="submit">
        <RiArrowGoBackFill className={css.icon} />
        Go back
      </button>
      <h2>MovieDetailsPage: {movieId}</h2>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          ></img>
          <ul>
            <li>Title:{movie.title}</li>
            <li>Overview:{movie.overview}</li>
            <li>Genres:{movie.genres}</li>
          </ul>
        </>
      )}
      <Outlet />
      {/* MovieCast, MovieReviews */}
    </div>
  );
}
