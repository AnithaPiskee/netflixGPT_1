import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'

const GptSearchContainer = () => {
  return (
    <div>
          <div className='fixed -z-10' alt="backgroundImg">
        <img src={BG_URL} />
    </div>
        <GptSearchBar/>
      <GptMovieSuggestions/>
      
    </div>
  )
}

export default GptSearchContainer
