import React, { useState } from 'react';

// styling
import './LoginContainer.css';

// components

const LoginContainer = () => {
  const [signIn, setSignIn] = useState(false)

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"]
    if (signIn) classArr.push("switch-banner")
    return classArr.join(" ")
  }

  const setFormClass = () => {
    const classArr = ["form-side cfb"]
    if (signIn) classArr.push("switch-form")
    return classArr.join(" ")
  }

  return (
    <div className="LoginContainer">
      <div className={setBannerClass()}>
        Banner
        <button onClick={()=> setSignIn(!signIn)}> 
          {signIn ? "Sign In" : "Create an Account"}
        </button>
      </div>
      <div className={setFormClass()}>
        Form
      </div>
    </div>
  );
}

export default LoginContainer;
