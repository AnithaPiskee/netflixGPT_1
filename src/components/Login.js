import React,{ useRef, useState } from 'react'
import Header from './Header';
import { validateData} from "../utils/validateData";
import { auth } from '../utils/firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';



const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const navigate = useNavigate();
    const email= useRef(null)
    const password = useRef(null)
    const name= useRef("");
    const [errorMsg,setErrorMsg] = useState(null);
    const dispatch = useDispatch();
    //handle singin
    const handlerSignIn = ()=>{
        setIsSignIn(!isSignIn)}
    //handle validation
   
    
    const handleValidation = () => {
      const msg = validateData(!isSignIn ? name.current.valueOf : "", email.current.value, password.current.value, isSignIn);
      setErrorMsg(msg);
      if (msg) return;
  
      if (!isSignIn) {
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                  const user = userCredential.user;
  
                  updateProfile(user, {
                      displayName: name.current.valueOf,
                      photoURL: USER_AVATAR,
                  }).then(() => {
                      // Now dispatch using the `user` object directly instead of `auth.currentUser`
                      dispatch(
                          addUser({
                              uid: user.uid,
                              email: user.email,
                              displayName: user.displayName,  // This will be set by updateProfile
                              photoURL: user.photoURL || USER_AVATAR, // Photo URL will be set if it's available
                          })
                      );
                      navigate("/browse");  // Navigate after successful signup
                  }).catch((error) => {
                      setErrorMsg(error.message);
                  });
              }).catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMsg(errorCode + "-" + errorMessage);
              });
      } else {
          // Sign in flow
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                  // Handle successful sign-in here
              }).catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMsg(errorMessage);
              });
      }
  };
  
  return (
   <div className=' relative w-full overflow-hidden'>

    {/* Netflix Header */}
    
    <Header/>
   

    {/* Background image */}
    <div className='absolute' alt="backgroundImg">
        <img src={BG_URL}/>
    </div>
   
    {/* signin form */}
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={(e)=> e.preventDefault()} className=' bg-black opacity-80 text-white w-4/12 p-9 rounded-md'>
            <p className='text-2xl font-bold m-4'>{isSignIn ? "Sign In" : "Sign Up"}</p>
            {!isSignIn && <input ref={name} className='w-full rounded-md bg-gray-700 p-3 my-2 mx-auto' type="text" placeholder='Full Name'/>}
            <input ref={email} className='w-full rounded-md bg-gray-700 p-3 my-2 mx-auto' type="text" placeholder='Email'/>
            <input ref={password} className='w-full rounded-md bg-gray-700 p-3 my-2' type="password" placeholder='password'/>
            <p className='text-red-600 text-md font-bold my-2'> {errorMsg}</p>
            <button onClick={handleValidation} className='w-full bg-red-700 p-3 my-2 rounded-md' type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
           
            <p className='m-3 cursor-pointer' onClick={()=>handlerSignIn()}>
                {isSignIn ? "New to Netflix?Sign Up" : "Allready have account? Sign In"}
            </p>
        </form>
    </div>
   </div>
  )
}

export default Login;
