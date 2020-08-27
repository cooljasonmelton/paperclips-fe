import React from 'react';

// styling
import './LoginContainer.css';

// components
import Login from './Login';
import SignUp from './SignUp';

const FormSide = props => {
  const { signIn } = props

  const setWelcomeClass = () => {
    const classArr = ["login-login"]
    if (signIn) classArr.push("switch-login-login")
    return classArr.join(" ")
  }

  const setCreateClass = () => {
    const classArr = ["login-signup"]
    if (signIn) classArr.push("switch-login-signup")
    return classArr.join(" ")
  }

  return (
    <div className="FormSide">
      <div className={setWelcomeClass()}>
        <Login/>
      </div>
      <div className={setCreateClass()}>
        <SignUp/>
      </div>
    </div>
  );
}

export default FormSide;
