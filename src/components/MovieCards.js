import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCards = ({movie}) => {
  if(!movie?.poster_path) return null
   
  return (
    <div className='w-36 m-2'>
      <img alt="moviecard" className="rounded-lg" src={IMG_URL+movie.poster_path}/>
    </div>
  )
}

export default MovieCards
