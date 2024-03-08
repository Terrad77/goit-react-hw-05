//npm install axios
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const TMDB_API_KEY = '948c9eb08635b5d08cc7dd3d37be71c0';
const TMDB_ACCES_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDhjOWViMDg2MzViNWQwOGNjN2RkM2QzN2JlNzFjMCIsInN1YiI6IjY1ZTk1Y2ZmNmJlYWVhMDE4Njc5YTAxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cRsbqf7JZOZVhw6E-vWQOr41-K2sGAVvZLsZ54SducA';

export const getMovies = async () => {
  try {
    const response = await axios.get('/trending/movie/day', {
      headers: { Authorization: `Bearer ${TMDB_ACCES_TOKEN}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

// const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// export default function getMovies() {
//   async (url, query, page = 1) => {
//     const params = {
//       query: query,
//       include_adult: false,
//       language: 'en-US',
//       page: page,
//     };

//     try {
//       const response = await axios.get(url, {
//         // baseURL: TMDB_BASE_URL,
//         params: params,
//         headers: {
//           Authorization: `Bearer ${TMDB_ACCES_TOKEN}`,
//         },
//       });

//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//       throw error;
//     }
//   };
// }

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// axios.defaults.params = {
//   api_key: '948c9eb08635b5d08cc7dd3d37be71c0',
//   // Authorization:
//   //   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDhjOWViMDg2MzViNWQwOGNjN2RkM2QzN2JlNzFjMCIsInN1YiI6IjY1ZTk1Y2ZmNmJlYWVhMDE4Njc5YTAxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cRsbqf7JZOZVhw6E-vWQOr41-K2sGAVvZLsZ54SducA',
// };

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/account/null',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer 948c9eb08635b5d08cc7dd3d37be71c0',
//   },
// };

// export const getMovies = async () => {
//   const response = await axios.get('/movie', {
//     params: {
//       query: 'star',
//       include_adult: 'false',
//       language: 'en-US',
//       page: '1',
//     },
//   });
//   console.log(response.data);
//   return response.data.results;
// };

//--------------------  вар2. --------------------//
// const url =
//   'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

// const options = {
//   headers: {
//     // Замість api_read_access_token вставте свій токен
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDhjOWViMDg2MzViNWQwOGNjN2RkM2QzN2JlNzFjMCIsInN1YiI6IjY1ZTk1Y2ZmNmJlYWVhMDE4Njc5YTAxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cRsbqf7JZOZVhw6E-vWQOr41-K2sGAVvZLsZ54SducA',
//   },
// };

// export const getMovies = async () => {
//   const response = await axios
//     .get(url, options)
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// };

//-------------------- /  вар2. --------------------//

// axios.get('/movie', {
//     params: {
//       query: 'star',
//       include_adult: 'false',
//       language: 'en-US',
//       page: '1',
//     },
//   });
//   console.log(response.data);
//   return response.data.results;
// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// axios.defaults.baseURL = 'https://api.unsplash.com';
// axios.defaults.params = {
//   client_id: 'Z_AJ42tCYRi9ez9R3kTo14ZRpWfnHT2xNXTyYUKcP6Q',
// };
// export const fetchImages = async (searchQuery, page) => {
//   try {
//     const response = await axios.get('/search/photos', {
//       params: {
//         query: searchQuery,
//         per_page: 9,
//         page,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     throw new Error('Failed to fetch images');
//   }
// };
