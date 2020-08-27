import React, { useState } from 'react';

// styling
import './LoginContainer.css';

// components
import BannerSide from './BannerSide';
import FormSide from './FormSide';

const LoginContainer = () => {
  const [signIn, setSignIn] = useState(false)

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"]
    if (signIn) classArr.push("switch-c-banner")
    return classArr.join(" ")
  }

  const setFormClass = () => {
    const classArr = ["form-side cfb"]
    if (signIn) classArr.push("switch-c-form")
    return classArr.join(" ")
  }

  return (
    <div className="LoginContainer">
      <div className={setBannerClass()}>
        <BannerSide signIn={signIn} setSignIn={setSignIn}/>
      </div>
      <div className={setFormClass()}>
        <FormSide signIn={signIn}/>
      </div>
    </div>
  );
}

export default LoginContainer;
