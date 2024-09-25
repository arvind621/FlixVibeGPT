import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate =  useNavigate();
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const dispatch = useDispatch();


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validation for forms
    const message = checkValidateData(email.current.value, password.current.value)
    setErrorMessage( message);
    if(message) return ;
   
    if(!isSignInForm) {
      // SignUp logic here
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: "Aravind" , photoURL: "https://avatars.githubusercontent.com/u/176029684?v=4"
        }).then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/Browse")
          // Profile updated!
        }).catch((error) => {
          setErrorMessage (error.message);

        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      });
    } else {
      // Signin logic here
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/Browse")
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

    }
  
  }

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="Netflix-img"
        />
      </div>
      <div>
        <form onSubmit={(e)=> e.preventDefault()} className="absolute p-12 w-96 bg-black  my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
          <h1 className="font-bold m-2 text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
           {!isSignInForm && ( <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-700"
          />)}
          <input
          ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="p-2 m-2 w-full bg-gray-700"
          />
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full bg-gray-700"
          />
          <p className="text-red-700 font-bold m-2">{errorMessage}</p>
          <button className="bg-red-700 px-2 py-1 m-2 w-full rounded-lg"
          onClick={handleButtonClick}
          >
           {isSignInForm ? "Sign In" : "Sign up"}
          </button>
          <div className="cursor-pointer p-2">Forgot Password?</div>
          <div className=" p-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already registred? Sign In Now"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
