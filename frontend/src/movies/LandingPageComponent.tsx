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
    return(
        <>
        <h3>In theaters</h3>
        <MoviesList movies={movies.inTheaters} />
        <h3>Upcoming</h3>
        <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}