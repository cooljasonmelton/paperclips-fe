import React, {useState} from 'react';

// styling
import './LoginContainer.css';

// components

const Login = () => {
  return (
    <div className="Login cfb">
      <form className="login-form">
      <label>
          <h5>Email:</h5>
          <input type="text" value="" />
        </label>
        <label>
          <h5>Password:</h5>
          <input type="password" value="" />
        </label>
        <br/>
        <input className="submit-button" type="submit" value="login" />
      </form>
    </div>
  );
}

export default Login;
