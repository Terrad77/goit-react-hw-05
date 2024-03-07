import css from './MoviesPage.module.css';
import { useEffect, useState } from 'react';
import { getMovies } from '../../movies-api';

import { IoSearchOutline } from 'react-icons/io5';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
//npm install react-hot-toast
import toast, { Toaster } from 'react-hot-toast';

// схема валідації input
// const SearchFormSchema = Yup.object().shape({
//   query: Yup.string().min(1, 'Nothing to search!').required('Required'),
// });

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
        toast.error(error);
      }
    }
    getData();
  }, []);

  //   return () => {
  //     <div className={css.moviesPageContainer}>
  //       <h1>Trending today</h1>
  //       <ul></ul>
  //     </div>;
  //   };

  //   const handleSubmit = async (values, actions) => {
  //     if (values.query.trim() === '') {
  //       toast.dismiss();
  //       toast.error('Please enter text to search movies!');
  //       return;
  //     }
  //     onSearch(values.query);
  //     actions.resetForm();
  //   };

  //   return (
  //     <Formik
  //       initialValues={{ query: '' }}
  //       onSubmit={handleSubmit}
  //       validationSchema={SearchFormSchema}
  //     >
  //       <header className={css.header}>
  //         <Toaster />
  //         <Form className={css.form}>
  //           <Field
  //             className={css.input}
  //             name="query"
  //             type="text"
  //             autoComplete="off"
  //             autoFocus
  //             placeholder="Search images and photos"
  //           />
  //           <button className={css.btn} type="submit">
  //             <IoSearchOutline className={css.icon} />
  //           </button>
  //         </Form>
  //       </header>
  //     </Formik>
  //   );
}

// export default function MoviesPage() {
//   return (
//     <div className={css.moviesPageContainer}>
//       <h1>Trending today</h1>
//       <ul></ul>
//     </div>
//   );
// }
