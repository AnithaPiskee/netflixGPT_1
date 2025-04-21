import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const moviesList = useSelector(store => store.movies?.nowPlayingMovies);
  if(!moviesList || moviesList.length==0) return null;
  const {id,overview,title} = moviesList[1];

  return (
    <div className='relative '>
      <VideoBackground id={id}/>
      <VideoTitle overview={overview} title={title}/>
    </div>
  )
}

export default MainContainer
