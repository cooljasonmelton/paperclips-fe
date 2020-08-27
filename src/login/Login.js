import React, {useState} from 'react';

// styling
import './LoginContainer.css';

// components

const Login = () => {
  return (
    <div className="Login">
      <form>
        <label>
          Email:
          <input type="text" value="" />
        </label>
        <label>
          Password:
          <input type="password" value="" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
