import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
// import css from './App.module.css';
import { useEffect, useState } from 'react';
// import { fetchImages } from '../../movies-api';

// import Loader from '../Loader/Loader';
// //npm install react-hot-toast
// import { Toaster } from 'react-hot-toast';
// import ImageModal from '../ImageModal/ImageModal';

import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {
  // const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // const [selectedImage, setSelectedImage] = useState(null);

  // useEffect(() => {
  //   // пропустити монтування за умовою, або if (!query) return;
  //   if (searchQuery === '') {
  //     return;
  //   }
  //   async function getData() {
  //     try {
  //       setIsLoading(true);
  //       setError(false);
  //       const data = await fetchImages(searchQuery, page);
  //       setImages(prevImages => {
  //         return [...prevImages, ...data];
  //       });
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getData();
  // }, [searchQuery, page]);

  //ф-ція submit форми
  // const handleSearch = newQuery => {
  //   //перевірка чи нове query при сабміті
  //   if (newQuery === searchQuery) {
  //     return;
  //   }
  //   //початкові стани при новому сабміті
  //   setSearchQuery(newQuery);
  //   setPage(1);
  //   setImages([]);
  //   setIsLoading(true);
  //   setError(false);
  //   setSelectedImage(null);
  //   setShowBtn(true); // Reset to show the button when searching again
  // };

  // const handleLoadMore = () => {
  //   setPage(page + 1);
  // };

  // const openModal = image => {
  //   setSelectedImage(image);
  // };

  // const closeModal = () => {
  //   setSelectedImage(null);
  // };

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route>
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
