import React, { useRef } from 'react'
import lang from '../utils/langConstant' 
import { useSelector } from 'react-redux';
import handlerChatGPTSearchClick from "../components/hooks/useSearchClickHandler";
import { useDispatch } from 'react-redux';


const GptSearchBar = () => {
  const languageValue = useSelector((store)=> store.configLang.lang)
  const dispatch = useDispatch();
  const searchPlaceholder = useRef(null);

  return (
    <div className='pt-[10%]  flex justify-center'>
      <form onSubmit={(e) =>e.preventDefault()} className=' bg-black  w-1/2  px-2 py-2 grid grid-cols-12 rounded-lg'>
        <input  ref={searchPlaceholder} type="text" className='bg-white p-2  col-span-9 rounded-lg text-gray-700' placeholder={lang[languageValue].placeholder}/>
        <button onClick={()=>handlerChatGPTSearchClick(searchPlaceholder,dispatch)} className='bg-red-700 py-2 mx-1 col-span-3 rounded-lg font-bold text-white'>{lang[languageValue].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
