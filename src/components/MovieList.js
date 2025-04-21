import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
 
  return (movies  &&
    <div className='pl-10 pb-4'>
        <h1 className='text-xl font-bold py-3'>{title}</h1>
    <div className='flex overflow-x-scroll card' >
        <div className='flex  '>
      {movies && movies.map(movie=> <MovieCards movie={movie} key={movie.id}/>)}
      </div>
    </div>
    </div>
  )
}

export default MovieList
