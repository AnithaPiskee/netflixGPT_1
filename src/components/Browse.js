import React from 'react'
import Header from './Header'
import useNowPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import usepopularMovies from './hooks/usePopularMovies';
import GptSearchContainer from './GptSearchContainer';

const Browse = () => {
  useNowPlayingMovies();
  usepopularMovies();
  const gptSearchShow = useSelector(store=>store.gptSearch?.toggleGPTSearch);
  console.log(gptSearchShow)

  return (
    <><div className='card overflow-x-scroll'>
    <Header/>
    {gptSearchShow ? <GptSearchContainer/> : <>
      <MainContainer />
      <SecondaryContainer/>

    </> }
    </div>
    </>
     
  )
}

export default Browse
