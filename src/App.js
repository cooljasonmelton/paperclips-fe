import React from 'react';

// router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styling
import './App.css';

// components
import Menu from './menu/Menu';
import AnalyticsContainer from './analytics/AnalyticsContainer'
import EntryContainer from './writing/EntryContainer'
import LoginContainer from './login/LoginContainer'
import Unauthorized from './unathorized/Unauthorized'
import Loader from './loader/Loader'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">

        {/* UNAUTHORIZED SITE */}
        {/* conditionally render after auth is set up */}
        {/* <Unauthorized/> */}
        
        {/* AUTHORIZED SITE */}
        <Menu/> 
        {/* <Switch>
          <Route path="/write" component={EntryContainer} />
          <Route path="/analytics" component={AnalyticsContainer} />
          <Route path="/" component={LoginContainer} />
        </Switch> */}

        <Loader/>
      </div>
    </BrowserRouter>
  );
}

export default App;
