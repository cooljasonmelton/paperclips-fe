import React, { useState } from 'react';

// styling
import './LoginContainer.css';

// components

const LoginContainer = () => {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="LoginContainer">
      <div className="banner-side cfb">
        Banner
        <button onClick={()=> setSignIn(!signIn)}> 
          {signIn ? "Sign In" : "Create an Account"}
        </button>
      </div>
      <div className="form-side cfb">
        Form
      </div>
    </div>
  );
}

export default LoginContainer;
