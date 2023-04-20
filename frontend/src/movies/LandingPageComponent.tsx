import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";

export default function LandingPage(){
    const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(()=> {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters:[{
          id: 1,
          title: 'Baraka movie',
          poster: 'https://www.cinemaclock.com/images/posters/1000x1500/8/baraka-1992-movie-poster-u.jpg'
        },
        {
          id: 2,
          title: 'Apocalypto',
          poster: 'https://i.pinimg.com/originals/68/1b/82/681b82aae79f4cdf3a6e4c9c7b81e595.jpg'
        }
      ],
      upcomingReleases:  [{
        id: 3,
        title: 'Spider man name',
        poster: 'https://image.tmdb.org/t/p/original/wZGlaMxBAjCIYLzyDWvocaoNooZ.jpg'
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
    return(
        <>
        <h3>In theaters</h3>
        <MoviesList movies={movies.inTheaters} />
        <h3>Upcoming</h3>
        <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}