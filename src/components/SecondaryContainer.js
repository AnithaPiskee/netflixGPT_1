import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const moviesArray = useSelector(store => store.movies);
 
  return (
    <div className='text-white bg-black '>
      {/* 
       movie tile
        -movie cards
      movie tile 
      -movie cards 
      */}
      <div className='-mt-50 z-20 relative'>
      <MovieList title={"Now playing"} movies={moviesArray.nowPlayingMovies}/>
      <MovieList title={"popular"} movies={moviesArray.popularMovies}/>
      <MovieList title={"Comedy"} movies={moviesArray.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={moviesArray.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer
