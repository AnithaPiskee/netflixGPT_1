import React from 'react'

const VideoTitle = ({overview,title}) => {
  return (
    <div className='absolute w-full aspect-video  top-0 pt-[10%] pl-6 z-10  bg-gradient-to-r text-white from-black/60 '>
      <h1 className='text-4xl font-bold px-4 py-4 '>{title}</h1>
      <p className='text-lg px-4 py-2 w-1/3'>{overview}</p>
      <div className='py-4'>
        <button className='bg-white text-black text-xl rounded-md font-medium px-6 py-2 mx-4 hover:opacity-70'> Play</button>
        <button className='bg-black hover:bg-gray-700  text-white text-xl rounded-lg font-medium px-4 py-2 mx-2'> More info</button>
      </div>
    </div>
  )
}

export default VideoTitle
