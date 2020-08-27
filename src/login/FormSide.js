import React from 'react';

// styling
import './LoginContainer.css';

// components
import Login from './Login';

const FormSide = () => {
  return (
    <div className="FormSide">
        <div> create account </div>
        <Login/>
    </div>
  );
}

export default FormSide;
