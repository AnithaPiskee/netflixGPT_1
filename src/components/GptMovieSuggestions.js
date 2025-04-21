import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const data= useSelector(store => store.gptSearch);
  const movieNames = data.gptMovieNames
  const movieResult = data.gptMovieResult
  
  return (
    <div className='bg-black  text-white opacity-85 m-3 '>
      {movieNames && movieNames.map((movie,index) =><MovieList key={index} title={movie} movies={movieResult[index].results}/>)}
    </div>
  )
}

export default GptMovieSuggestions
