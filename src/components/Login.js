import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);

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
        <form className="absolute p-12 w-96 bg-black  my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
          <h1 className="font-bold m-2 text-3xl">
            {isSignInForm ? "Login" : "Sign In"}
          </h1>
           {!isSignInForm && ( <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-700"
          />)}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-2 m-2 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-full bg-gray-700"
          />
          <button className="bg-red-700 px-2 py-1 m-2 w-full rounded-lg">
           {isSignInForm ? "Login" : "Sign In"}
          </button>
          <div className="cursor-pointer p-2">Forgot Password?</div>
          <div className=" p-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign In now"
              : "Already registred? Login Now"}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
