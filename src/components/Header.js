import React from 'react'
import {signOut} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const handleSignOut= () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
   
    <div className='absolute z-10 w-screen  px-2 py-4 bg-gradient-to-b from-black flex justify-between'>
      <img className='w-44'
       src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='Netflix-logo'
      />
      
   
  {user && user.uid && (
  <div className='flex pr-2 '>
    <img className='w-12 h-12 ml-2'
      alt='signout-icon' src={user?.photoURL} />
    <button onClick={handleSignOut} className='text-white font-bold '>(Sign Out)</button>
  </div>
)}
        
         </div>    
  
)
}

export default Header
