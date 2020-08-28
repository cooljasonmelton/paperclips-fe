import React from 'react';

// styling
import './LoginContainer.css';

// components

const BannerSide = props => {
    const {signIn, setSignIn} = props

    const setWelcomeClass = () => {
        const classArr = ["banner-login"]
        if (signIn) classArr.push("switch-banner-login")
        return classArr.join(" ")
    }

    const setCreateClass = () => {
        const classArr = ["banner-signup"]
        if (signIn) classArr.push("switch-banner-signup")
        return classArr.join(" ")
    }

    return (
        <div className="BannerSide">

            <div className={setWelcomeClass()}>
                <h2>Welcome Back!</h2>
                <hr className="banner-hr"/>
                <h5>new to the site?</h5>
                <button className="banner-button"
                    onClick={()=> setSignIn(!signIn)}> 
                    create account
                </button>
            </div>

            <div className={setCreateClass()}>
                <h2>Create Account</h2>
                <hr className="banner-hr"/>
                <h5>already have an account?</h5>
                <button className="banner-button"
                    onClick={()=> setSignIn(!signIn)}> 
                    sign in
                </button>
            </div>
            
        </div>
  );
}

export default BannerSide;
