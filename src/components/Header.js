import { onAuthStateChanged, signOut } from 'firebase/auth';
import React,{useEffect} from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser,addUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { addToggleGPTSearch } from '../utils/GPTSearchSlice';
import { selectLanguages } from '../utils/constants';
import {  changeLanguage } from '../utils/configLanguageSlice';

 
 const Header = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch();
  const user= useSelector(store => store.user)
  const toggleGPTShow= useSelector(store =>store.gptSearch.toggleGPTSearch)
  const handleGPTSearchClick = () =>{
    // handler search toggle 
    dispatch(addToggleGPTSearch());
  }
  const handlerSignOut= ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser())
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }
  const handlerLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value))
  }
   useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {  
           const { uid, email,displayName,photoURL } = user;
          dispatch(addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  photoURL:user.photoURL,
                  }))
           navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
      return () => unsubscribe();
    }
    ,[dispatch,navigate])
   
   return (<>
 <div className='absolute top-0  w-screen px-2 z-15 flex justify-between  bg-gradient-to-b from-black' alt="netflixLogo">
 <img className='w-40'  src={LOGO}/>
 {user && <div className="flex p-2" >
      {toggleGPTShow && <select className='bg-white text-black m-3 p-2 rounded-lg' onChange={handlerLanguageChange}>
        {selectLanguages.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}
      <button className='px-3 h-12 m-2 rounded-lg bg-red-700 text-white ' onClick={handleGPTSearchClick}>{toggleGPTShow ? "Home Page" :"GPT Search"}</button>
      <img className="w-15 p-3" alt="userLogo" src={user?.photoURL}/>
      <button className='text-white font-bold cursor-pointer ' onClick={handlerSignOut}>sign out</button>
      </div>}
</div>
</>
   )
 }
 
 export default Header
 
