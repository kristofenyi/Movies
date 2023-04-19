import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import MoviesList from './movies/MoviesList';
import { landingPageDTO, movieDTO } from './movies/movies.model';
import Button from './utils/Button';

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(()=> {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters:[{
          id: 1,
          title: 'Movie name',
          poster: 'https://fair-delivery.com/assets/woo.png'
        },
        {
          id: 2,
          title: 'Movie name 2',
          poster: 'https://fair-delivery.com/assets/woo.png'
        }
      ],
      upcomingReleases:  [{
        id: 3,
        title: 'Movie name',
        poster: 'https://fair-delivery.com/assets/api.png'
      },
      {
        id: 4,
        title: 'Movie name 2',
        poster: 'https://fair-delivery.com/assets/api.png'
      }
      ]
      })

    }, 1000);
    return () => clearTimeout(timerId);
  });

  return (
    <div className="container">
    <h1>Hello world</h1>
    <Button>Text</Button>
    <h3>In theaters</h3>

    <MoviesList movies={movies.inTheaters} />

    <h3>Upcoming</h3>
    <MoviesList movies={movies.upcomingReleases} />
    </div>
  );
}

export default App;
