import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router';


// styling
import './App.css';

// components
import Menu from './menu/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>

      </div>
    </BrowserRouter>
  );
}

export default App;
