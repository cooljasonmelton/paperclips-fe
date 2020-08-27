import React from 'react';

// styling
import './LoginContainer.css';

// components

const SignUp = () => {
  return (
    <div className="SignUp cfb">   
      <form className="signup-form">
        <label>
          <h5>Name:</h5>
          <input type="text" value="" />
        </label>
        <label>
          <h5>Email:</h5>
          <input type="text" value="" />
        </label>
        <label>
          <h5>Password:</h5>
          <input type="password" value="" />
        </label>
        <br/>
        <label>
          <h5>Email:</h5>
          <input type="text" value="" />
        </label>
        <label>
          <h5>Password:</h5>
          <input type="password" value="" />
        </label>
        <br/>
        <input className="submit-button" type="submit" value="sign up" />
      </form>

    </div>
  );
}

export default SignUp;
