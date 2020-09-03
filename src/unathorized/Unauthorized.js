import React from 'react';

// router
import { withRouter, Route } from 'react-router-dom';

// styling
import '../App.css';
import '../menu/Menu.css'

// components
import LoginContainer from '../login/LoginContainer'

const Unauthorized = props => {
    const navigateSite = () => {
        props.history.push("/")
    }

    return (
        <div className="App">
            <div className="Menu" onClick={navigateSite}>
                <button className="nav-button">paperclips</button>
            </div>

            <Route path="/" component={LoginContainer} />
        </div>
  );
}

export default withRouter(Unauthorized);
